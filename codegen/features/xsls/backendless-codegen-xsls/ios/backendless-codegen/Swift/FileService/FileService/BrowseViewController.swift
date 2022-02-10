
import UIKit
import Backendless

class BrowseViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {
    
    @IBOutlet weak var mainTableView: UITableView!
    
    var mainData: [FileObject]?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        getAllEntitiesAsync()
    }
    
    func getAllEntitiesAsync() {
        Backendless.shared.data.of(FileObject.self).find(responseHandler: { photos in
            if photos.count == 0 {
                self.present(UIAlertController.init(title: "No files found", message: "Please take some photos before you can browse them", preferredStyle: .alert), animated: true, completion: {
                    Timer.scheduledTimer(withTimeInterval: 3, repeats:false, block: {_ in
                        self.dismiss(animated: true, completion: nil)
                    })
                })
                self.navigationController?.popToRootViewController(animated: true)
            }
            else {
                self.mainData = photos as? [FileObject]
                self.mainTableView.reloadData()
            }
        }, errorHandler: { fault in
            self.present(UIAlertController.init(title: "Error", message: fault.message, preferredStyle: .alert), animated: true, completion: {
                Timer.scheduledTimer(withTimeInterval: 3, repeats:false, block: {_ in
                    self.dismiss(animated: true, completion: nil)
                })
            })
            self.navigationController?.popToRootViewController(animated: true)
        })
    }
    
    @IBAction func removeAll(_ sender: Any) {
        Backendless.shared.file.remove(path: "img", responseHandler: { _ in
            for file in self.mainData! {
                Backendless.shared.data.of(FileObject.self).remove(entity: file, responseHandler: { removed in
                    self.present(UIAlertController.init(title: "Files removed", message: "All files have been removed", preferredStyle: .alert), animated: true, completion: {
                        Timer.scheduledTimer(withTimeInterval: 3, repeats:false, block: {_ in
                            self.dismiss(animated: true, completion: nil)
                        })
                    })
                    self.navigationController?.popToRootViewController(animated: true)
                }, errorHandler: { fault in
                    self.present(UIAlertController.init(title: "Error", message: fault.message, preferredStyle: .alert), animated: true, completion: {
                        Timer.scheduledTimer(withTimeInterval: 3, repeats:false, block: {_ in
                            self.dismiss(animated: true, completion: nil)
                        })
                    })
                    self.navigationController?.popToRootViewController(animated: true)
                })
            }
        }, errorHandler: { fault in
            self.present(UIAlertController.init(title: "Error", message: fault.message, preferredStyle: .alert), animated: true, completion: {
                Timer.scheduledTimer(withTimeInterval: 3, repeats:false, block: {_ in
                    self.dismiss(animated: true, completion: nil)
                })
            })
            self.navigationController?.popToRootViewController(animated: true)
        })
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if mainData != nil {
            if (mainData!.count % 4 == 0) {
                return (mainData!.count / 4)
            }
            else {
                return (mainData!.count / 4 + 1)
            }
        }
        else {
            return 0
        }
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cellIdentifier = "Cell"
        let cell = tableView.dequeueReusableCell(withIdentifier: cellIdentifier)
        for i in 1...4 {
            if (indexPath.row * 4 + i > (mainData?.count)!) {
                break
            }
            let button = cell?.viewWithTag(i) as! UIButton
            if let str = mainData?[indexPath.row * 4 + i - 1].path,
               let url = URL(string: str) {
                button.isHidden = false
                button.isEnabled = false
                                
                let downloadPhotoTask = URLSession.shared.downloadTask(with: url) { location, response, error in
                    if location != nil,
                       let data = try? Data(contentsOf: location!),
                       let downloadedImage = UIImage(data: data) {
                        DispatchQueue.main.async {
                            button.setImage(downloadedImage, for: .normal)
                            button.isEnabled = true
                        }
                    }
                }
                downloadPhotoTask.resume()
                
                /*NSURLSessionDownloadTask *downloadPhotoTask = [[NSURLSession sharedSession] downloadTaskWithURL:url completionHandler:^(NSURL *location, NSURLResponse *response, NSError *error) {
                 UIImage *downloadedImage = [UIImage imageWithData: [NSData dataWithContentsOfURL:location]];
                 dispatch_async(dispatch_get_main_queue(), ^{
                     [button setImage:downloadedImage forState:UIControlStateNormal];
                     button.enabled = YES;
                 });
             }];
             [downloadPhotoTask resume];*/
                
                
                
                
//                NSURLConnection.sendAsynchronousRequest(NSURLRequest.init(url: url! as URL) as URLRequest, queue: OperationQueue.main, completionHandler: { (response: URLResponse?, data: Data?, error: Error?) -> () in
//                    let responseUrl = response?.copy() as! HTTPURLResponse
//                    let statusCode = responseUrl.statusCode
//                    if (statusCode == 200) {
//                        button.setImage(UIImage.init(data: data!), for: .normal)
//                        button.isEnabled = true
//                    }
//                })
            }
        }
        return cell!
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let imagePreview = segue.destination as? ImagePreviewViewController {
            imagePreview.mainImage = (sender as! UIButton).image(for: .normal)
            imagePreview.isUpload = true
            let cell = (sender as! UIButton).superview?.superview as! UITableViewCell
            let row = mainTableView.indexPath(for: cell)!.row
            imagePreview.file = mainData?[row * 4 + ((sender as AnyObject).tag)! - 1]
        }
    }
}
