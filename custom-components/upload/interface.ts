import { UploadFile } from "ng-zorro-antd";

export interface YztUploadFile extends UploadFile{
    id:string;
    url:string;
    name:string;
    path?:string;
    etag?:string;
}