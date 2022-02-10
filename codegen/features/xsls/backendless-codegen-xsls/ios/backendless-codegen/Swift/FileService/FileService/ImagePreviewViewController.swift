
import UIKit
import Backendless

class ImagePreviewViewController: UIViewController {
    
    @IBOutlet weak var mainImageView: UIImageView!
    @IBOutlet weak var uploadBtn: UIBarButtonItem!
    
    var file: FileObject!
    var mainImage: UIImage?
    var isUpload: Bool?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.prepareView()
    }
    
    func prepareView() {
        self.mainImageView.image = self.mainImage
        if (self.isUpload == true) {
            self.navigationItem.title = "Uploaded photo"
            self.uploadBtn.title = "Remove"
        }
        else {
            self.isUpload = false
            self.navigationItem.title = "Upload photo"
            self.uploadBtn.title = "Upload"
        }
    }
    
    func saveEntityWithName(path: String?) {
        let newFile = FileObject()
        newFile.path = path
        Backendless.shared.data.of(FileObject.self).save(entity: newFile, responseHandler: { savedFile in
            self.file = savedFile as? FileObject
        }, errorHandler: { fault in
            self.present(UIAlertController.init(title: "Error", message: fault.message, preferredStyle: .alert), animated: true, completion: {
                Timer.scheduledTimer(withTimeInterval: 3, repeats:false, block: {_ in
                    self.dismiss(animated: true, completion: nil)
                })
            })
        })
    }
    
    @IBAction func upload(_ sender: Any) {
        if (isUpload == true) {
            Backendless.shared.file.remove(path: "img/" + (file?.path?.components(separatedBy: "/").last)!, responseHandler: { _ in 
                Backendless.shared.data.of(FileObject.self).remove(entity: self.file as Any, responseHandler: { removed in
                    self.file = nil
                    self.present(UIAlertController.init(title: "Success", message: "Image has been deleted", preferredStyle: .alert), animated: true, completion: {
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
                })
            }, errorHandler: { fault in
                self.present(UIAlertController.init(title: "Success", message: "Image has been deleted", preferredStyle: .alert), animated: true, completion: {
                    Timer.scheduledTimer(withTimeInterval: 3, repeats:false, block: {_ in
                        self.dismiss(animated: true, completion: nil)
                    })
                })
                self.present(UIAlertController.init(title: "Error", message: fault.message, preferredStyle: .alert), animated: true, completion: {
                    Timer.scheduledTimer(withTimeInterval: 3, repeats:false, block: {_ in
                        self.dismiss(animated: true, completion: nil)
                    })
                })
            })
        }
        else {
            Backendless.shared.file.uploadFile(fileName: String(format: "%0.0f.jpeg", Date().timeIntervalSince1970), filePath: "img", content: (mainImage?.jpegData(compressionQuality: 0.1))!, responseHandler: { uploadedFile in                self.saveEntityWithName(path: uploadedFile.fileUrl)                
            }, errorHandler: { fault in
                self.present(UIAlertController.init(title: "Error", message: fault.message, preferredStyle: .alert), animated: true, completion: {
                    Timer.scheduledTimer(withTimeInterval: 3, repeats:false, block: {_ in
                        self.dismiss(animated: true, completion: nil)
                    })
                })
            })
        }
        self.isUpload = !self.isUpload!
        self.prepareView()
        if (isUpload == true) {
            self.present(UIAlertController.init(title: "Image uploaded", message: "Image has been uploaded. The file is available in the files browser", preferredStyle: .alert), animated: true, completion: {
                Timer.scheduledTimer(withTimeInterval: 3, repeats:false, block: {_ in
                    self.dismiss(animated: true, completion: nil)
                })
            })
            self.navigationController?.popToRootViewController(animated: true)
        }
    }
}
