import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-aktor-crud',
  templateUrl: './aktor-crud.component.html',
  styleUrls: ['./aktor-crud.component.scss']
})
export class AktorCrudComponent implements OnInit {
  model = {
    "action": "add",
    "name": null,
  };

  listDataAktor;
  isAdd: boolean = false;
  isEditSimpan: boolean = false;
  forEdit;
  constructor(private crudService: CrudService) {

  }

  ngOnInit(): void {
    this.getListAktor();
  }

  gotoTambah(){

    this.isAdd = true;
  }
  getListAktor() {
    this.crudService.getAktor().subscribe((result: any) => {
      this.listDataAktor = result.data;
      console.log("data", result);
    }, error => {
      console.log("error", error);
    })
  }

  back(){
    this.isAdd = false;
    this.isEditSimpan = false;
  }
  
  lemparData() {
    console.log("data input", this.model.name);
    this.crudService.addAktor(this.model.name).subscribe((data: any) => {
      alert(`${data[0].message} || ${data[0].status_code}`)
      location.reload();
    }, error => {
      console.log("error", error)
    })
  }

  lemparEditData(){
    this.crudService.editAktor(this.forEdit.id,this.model.name,).subscribe((data: any) => {
      console.log("data",data);
      alert(`${data[0].message} || ${data[0].status_code}`)
      location.reload();
    },error => {
      console.log("error",error);
    })
  }

  editAktor(dataAktor) {
    console.log("data",dataAktor)
    this.isAdd = true;
    this.isEditSimpan = true;
    this.forEdit = dataAktor
    this.model.name = dataAktor.name
  }

  deleteAktor(idAktor){
    this.crudService.deleteAktor(idAktor).subscribe((data: any) => {
      console.log("data",data);
      alert(`${data[0].message} || ${data[0].status_code}`)
      location.reload();
    },error => {
      alert(error);
      console.log("error",error);
    })
  }


}
