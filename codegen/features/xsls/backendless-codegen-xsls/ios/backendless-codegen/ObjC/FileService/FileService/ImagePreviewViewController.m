#import "ImagePreviewViewController.h"
#import "BrowseViewController.h"
#import "FileObject.h"
#import <Backendless-Swift.h>

@interface ImagePreviewViewController() {
    DataStoreFactory *filesDataStore;
}
@end

@implementation ImagePreviewViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self prepareView];
    filesDataStore = [Backendless.shared.data of:[FileObject class]];
}

- (void)prepareView {
    self.mainImageView.image = self.mainImage;
    if (self.isUpload) {
        [self.navigationItem setTitle:@"Uploaded photo"];
        [self.uploadBtn setTitle:@"Remove"];
    }
    else {
        [self.navigationItem setTitle:@"Upload photo"];
        [self.uploadBtn setTitle:@"Upload"];
    }
}

- (void)saveEntityWithName:(NSString *)path {
    self.file = [FileObject new];
    self.file.path = path;
    [filesDataStore saveWithEntity:self.file responseHandler:^(FileObject *savedFile) {
    } errorHandler:^(Fault *fault) {
        [self presentViewController:[UIAlertController alertControllerWithTitle:@"Error" message:fault.message preferredStyle:UIAlertControllerStyleAlert] animated:YES completion:^{
            [NSTimer scheduledTimerWithTimeInterval:3 repeats:NO block:^(NSTimer *timer) {
                [self dismissViewControllerAnimated:YES completion:nil];
            }];
        }];
    }];
}

- (IBAction)pressedUpload:(id)sender {
    if (self.isUpload) {
        [Backendless.shared.file removeWithPath:[NSString stringWithFormat:@"img/%@", [[self.file.path pathComponents] lastObject]] responseHandler:^(NSInteger removed) {
            [self->filesDataStore removeWithEntity:self.file responseHandler:^(NSInteger removed) {
                self.file = nil;
                [self presentViewController:[UIAlertController alertControllerWithTitle:@"Success" message:@"Image has been deleted" preferredStyle:UIAlertControllerStyleAlert] animated:YES completion:^{
                    [NSTimer scheduledTimerWithTimeInterval:3 repeats:NO block:^(NSTimer *timer) {
                        [self dismissViewControllerAnimated:YES completion:nil];
                    }];
                }];
                [self.navigationController popToRootViewControllerAnimated:YES];
            } errorHandler:^(Fault *fault) {
                [self presentViewController:[UIAlertController alertControllerWithTitle:@"Error" message:fault.message preferredStyle:UIAlertControllerStyleAlert] animated:YES completion:^{
                    [NSTimer scheduledTimerWithTimeInterval:3 repeats:NO block:^(NSTimer *timer) {
                        [self dismissViewControllerAnimated:YES completion:nil];
                    }];
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
    else {
        [Backendless.shared.file uploadFileWithFileName:[NSString stringWithFormat:@"%0.0f.jpeg", [[NSDate date] timeIntervalSince1970]] filePath:@"img" content:UIImageJPEGRepresentation(self.mainImage, 0.1) responseHandler:^(BackendlessFile *uploadedFile) {
            [self saveEntityWithName:uploadedFile.fileUrl];
        } errorHandler:^(Fault *fault) {
            [self presentViewController:[UIAlertController alertControllerWithTitle:@"Error" message:fault.message preferredStyle:UIAlertControllerStyleAlert] animated:YES completion:^{
                [NSTimer scheduledTimerWithTimeInterval:3 repeats:NO block:^(NSTimer *timer) {
                    [self dismissViewControllerAnimated:YES completion:nil];
                }];
            }];
        }];
    }
    self.isUpload = !self.isUpload;
    [self prepareView];
    if(self.isUpload) {
        [self presentViewController:[UIAlertController alertControllerWithTitle:@"Image uploaded" message:@"The Image has been uploaded. The file is available in the files browser" preferredStyle:UIAlertControllerStyleAlert] animated:YES completion:^{
            [NSTimer scheduledTimerWithTimeInterval:3 repeats:NO block:^(NSTimer *timer) {
                [self dismissViewControllerAnimated:YES completion:nil];
            }];
        }];
        [self.navigationController popToRootViewControllerAnimated:YES];
    }
}

@end
