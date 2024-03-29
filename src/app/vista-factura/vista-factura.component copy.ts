import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { VistaFacturaDataSource } from './vista-factura-datasource';
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from '../DataService';
import { Factura } from  '../factura';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-vista-factura',
  templateUrl: './vista-factura.component.html',
  styleUrls: ['./vista-factura.component.css']
})
export class VistaFacturaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Factura>;
  dataSource: VistaFacturaDataSource;
  title='Facturas';
  greeting={'id': 'xxx', 'content': 'Hello World!!'}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id',  'numeroFactura', 'fechaEmision', 'totalFactura' ];

  constructor(private router: Router, private  dataService:  DataService) {
    console.log("PASA POR CONSTRUTOR DE  VISTA FACTURA");
    this.dataSource = new VistaFacturaDataSource(dataService);
  }

  allFacturas: Factura[] = [];

  ngOnInit() {
    this.dataService.getDataList().subscribe(res => this.allFacturas = res);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    //this.table.dataSource = this.dataSource;
  }


  public product = { id: "1", name: "Angular 2" };

  nueva() {
    //this.router.navigateByUrl('/dynamic', { state: { id:1 , name:'Angular' } });
    this.router.navigateByUrl("/creacion-factura", { state: this.product });
  }

}

@Component({
  selector: 'dialog-animations-example-dialog2',
  templateUrl: 'dialog-animations-example-dialog2.html',
})
export class DialogAnimationsExampleDialog2 {
  credentials:any;
  

  error="";
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog2>) {
  }

  closeDialog(){
    this.dialogRef.close();
    this.credentials = {username: 'andrew',nombre: 'ANDRES',apellido: Math.random() * 1000, password: ''};
     localStorage.setItem("usuario",JSON.stringify(this.credentials));
  }
}
