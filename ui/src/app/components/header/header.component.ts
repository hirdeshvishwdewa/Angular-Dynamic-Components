import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/modules/shared/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  uploadedFiles: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  fileChange(element: any) {
    this.uploadedFiles = element.target.files;
    this.upload();
  }
  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.apiService.post('/api/upload', formData)
    .subscribe((response) => {
         console.log('response received is ', response);
    }, (error: any) => {
      console.error(error);
    })
}
}
