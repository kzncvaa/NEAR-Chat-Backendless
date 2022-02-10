#import "BrowseViewController.h"
#import "ImagePreviewViewController.h"
#import "FileObject.h"
#import <Backendless-Swift.h>

@interface BrowseViewController () {
    NSArray *mainData;
    DataStoreFactory *filesDataStore;
}
@end

@implementation BrowseViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    filesDataStore = [Backendless.shared.data of:[FileObject class]];
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [self getAllEntitysAsync];
}

- (void)getAllEntitysAsync {
    [filesDataStore findWithResponseHandler:^(NSArray *photos) {
        if (photos.count == 0) {
            [self presentViewController:[UIAlertController alertControllerWithTitle:@"No files found" message:@"Please take some photos before you can browse them" preferredStyle:UIAlertControllerStyleAlert] animated:YES completion:^{
                [NSTimer scheduledTimerWithTimeInterval:3 repeats:NO block:^(NSTimer *timer) {
                    [self dismissViewControllerAnimated:YES completion:nil];
                }];
            }];
            [self.navigationController popToRootViewControllerAnimated:YES];
        }
        else {
            self->mainData = photos;
            [self.mainTableView reloadData];
        }
    } errorHandler:^(Fault *fault) {
        [self presentViewController:[UIAlertController alertControllerWithTitle:@"Error" message:fault.message preferredStyle:UIAlertControllerStyleAlert] animated:YES completion:^{
            [NSTimer scheduledTimerWithTimeInterval:3 repeats:NO block:^(NSTimer *timer) {
                [self dismissViewControllerAnimated:YES completion:nil];
            }];
        }];
        [self.navigationController popToRootViewControllerAnimated:YES];
    }];
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return (mainData.count / 4) + ((mainData.count % 4) ? 1 : 0);
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    static NSString *cellIdentifier = @"Cell";
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:cellIdentifier];
    for (int i = 1; i <= 4; i++) {
        if (indexPath.row * 4 + i > mainData.count)
            break;
        UIButton *button = (UIButton *)[cell viewWithTag:i];
        NSString *str = (NSString *)[[mainData objectAtIndex:indexPath.row * 4 + i - 1] path];
        NSURL *url = [NSURL URLWithString:str];
        button.hidden = NO;
        button.enabled = NO;
        NSURLSessionDownloadTask *downloadPhotoTask = [[NSURLSession sharedSession] downloadTaskWithURL:url completionHandler:^(NSURL *location, NSURLResponse *response, NSError *error) {
            UIImage *downloadedImage = [UIImage imageWithData: [NSData dataWithContentsOfURL:location]];
            dispatch_async(dispatch_get_main_queue(), ^{
                [button setImage:downloadedImage forState:UIControlStateNormal];
                button.enabled = YES;
            });
        }];
        [downloadPhotoTask resume];
    }
    return cell;
}

- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    NSIndexPath *indexPath = [self.mainTableView indexPathForCell:(UITableViewCell *)[[sender superview] superview]];
    ImagePreviewViewController *imagePreview = (ImagePreviewViewController *)[segue destinationViewController];
    [imagePreview setMainImage:[(UIButton *)sender imageForState:UIControlStateNormal]];
    [imagePreview setIsUpload:YES];
    [imagePreview setFile:[mainData objectAtIndex:indexPath.row * 4 + [sender tag] - 1]];
}

- (IBAction)pressedRemoveAll:(id)sender {
    [Backendless.shared.file removeWithPath:@"img" responseHandler:^(NSInteger removed) {
        for (FileObject *file in self->mainData) {
            [self->filesDataStore removeWithEntity:file responseHandler:^(NSInteger removed) {
                [self presentViewController:[UIAlertController alertControllerWithTitle:@"Files removed" message:@"All files have been removed" preferredStyle:UIAlertControllerStyleAlert] animated:YES completion:^{
                    [NSTimer scheduledTimerWithTimeInterval:3 repeats:NO block:^(NSTimer *timer) {
                        [self dismissViewControllerAnimated:YES completion:nil];
                    }];
                }];
            } errorHandler:^(Fault *fault) {
                [self presentViewController:[UIAlertController alertControllerWithTitle:@"Error" message:fault.message preferredStyle:UIAlertControllerStyleAlert] animated:YES completion:^{
                    [NSTimer scheduledTimerWithTimeInterval:3 repeats:NO block:^(NSTimer *timer) {
                        [self dismissViewControllerAnimated:YES completion:nil];
                    }];
                }];
            }];
        }
    } errorHandler:^(Fault *fault) {
        [self presentViewController:[UIAlertController alertControllerWithTitle:@"Error" message:fault.message preferredStyle:UIAlertControllerStyleAlert] animated:YES completion:^{
            [NSTimer scheduledTimerWithTimeInterval:3 repeats:NO block:^(NSTimer *timer) {
                [self dismissViewControllerAnimated:YES completion:nil];
            }];
        }];
    }];
    [self.navigationController popToRootViewControllerAnimated:YES];
}

@end
