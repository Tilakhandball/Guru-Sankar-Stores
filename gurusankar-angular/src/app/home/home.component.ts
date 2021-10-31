import { NewAdditionsComponent } from './../shared/new-additions/new-additions.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash'; 

interface AddFeatures {
  title: string;
  hasAgency: boolean;
  hasName: boolean;
  hasCategory: boolean;
  hasQuantity: boolean;
  hasPrice: boolean;
  hasPhoneNo: boolean;
  hasCity: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  addFeatures: any;
  dialogData: AddFeatures = {
    title: '',
    hasAgency: true,
    hasName: true,
    hasCategory: true,
    hasQuantity: true,
    hasPrice: true,
    hasPhoneNo: true,
    hasCity: true
  }

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData = () => {
    this.addFeatures = [
      {
        id: 1,
        name: '+ Add Item',
      },
      {
        id: 2,
        name: '+ Add Agent',
      },
      {
        id: 3,
        name: '+ Add Next Order'
      }
    ]
  }

  triggerFeature = (id: number) => {
    let dialogData = this.createDialogData(id);
    const dialogRef = this.dialog.open(NewAdditionsComponent, {width: '300px', data: dialogData});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  createDialogData = (id: number) => {
    let dialogData = _.clone(this.dialogData);
    switch (id) {
      case 1:
        dialogData.title = 'Item';
        dialogData.hasQuantity = false;
        dialogData.hasPhoneNo = false;
        dialogData.hasCity = false;
        break;
      case 2:
        dialogData.title = 'Agent';
        dialogData.hasQuantity = false;
        dialogData.hasPrice = false;
        break;
      case 3:
        dialogData.title = 'Next Order';
        dialogData.hasPhoneNo = false;
        dialogData.hasCity = false;
        dialogData.hasPrice = false;
        break;
    }
    return dialogData;
  }
}
