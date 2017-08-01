import { Component, OnInit } from '@angular/core';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { Column } from './models/column';

import { User } from './models/user';

import { UserService } from '../shared/services/user/user.service';

import { FormComponent } from '../form/form.component';
import { DialogService } from "ng2-bootstrap-modal";
import { ConfirmModalComponent } from "../shared/components/confirmmodal/confirmmodal.component";


@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UserTableComponent implements OnInit {

  columns: Column[] = new Array();

  users: User[];

  filterValue: string;

  itemsTotal = 0;
  offset = 0;
  limit = 5;

  constructor(
    private translateService: TranslateService,
    private userService: UserService,
    private dialogService: DialogService
  ) {
  }

  ngOnInit() {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translateService.get('columns').subscribe((cols: string[]) => {
        for (let index = 0; index < cols.length; index++) {
          this.columns[index] = this.getColumn(cols[index]);
        }
      });
    });

    FormComponent.eventEmitter.subscribe((value) => {
      this.filterValue = value;
    });

    this.fillInUsers();
  }

  getColumn(column): Column {
    const col = new Column();
    col.id = column['id'];
    col.title = column['title'];
    col.sort = column['sort'];
    return col;
  }

  fillInUsers() {
    this.userService.getUsers(this.getPage(), this.limit)
      .subscribe((res) => {
        this.itemsTotal = res.totalElements;
        this.users = res.content;
      });
  }

  onPageChange(map) {
    this.offset = map.get('offset');
    this.limit = map.get('limit');

    this.fillInUsers();
  }

  getPage() {
    return (this.offset / this.limit);
  }
}
