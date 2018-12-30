import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  name:string;
  email:string;
  country:string;
  message: string;


  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  /* Ajouter un nouveau utilisateur */
  add(){
    let user = {
      id: null,
      name: this.name,
      email: this.email,
      country: this.country,
      avatarURL: null
    }

    this.userService.addUser(user).subscribe(data => {
      this.message = "Utilisateur créé avec succès";
    }, err => {
      this.message = "Erreur lors de la création de l'utilisateur" + err;
    });

  }

}
