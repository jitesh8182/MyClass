import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogEmailComponent } from 'src/app/shared/dialogs/dialog-email/dialog-email.component';
import { StreamsrvService } from 'src/app/shared/service/streamsrv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  classDetail: any;
  userDetail: any;

  constructor(private dialog:MatDialog,private streampost: StreamsrvService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.streampost.getClassDetail(this.activeRoute.snapshot.paramMap.get('id')).subscribe(res => {
      console.log(res);
      this.classDetail = res
    })

    this.streampost.getUserlist(this.activeRoute.snapshot.paramMap.get('id')).subscribe(res => {
      console.log(res);
      this.userDetail = res
    })
  }
  onDelete() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Person removed from class.',
          'success'
        )
      }
    })
  }
  onEmail() {
    this.dialog.open(DialogEmailComponent)
  }
}
