import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  username: string = "";
  password: string = "";
  users: any[] = [];

  constructor(private router: Router) {}
  onLogin() {
    const correctUsername = "Trabajorandom";
    const correctPassword = "123456jsd";

    if (
      this.username === correctUsername &&
      this.password === correctPassword
    ) {
      console.log("Inicio de sesión exitoso");
      this.router.navigate(["/market"]);
    } else {
      console.log("Usuario o contraseña incorrectos");
    }
  }
  onRegister() {
    if (this.username && this.password) {
      const newUser = { username: this.username, password: this.password };
      this.users.push(newUser);
      console.log("Registro exitoso: ", newUser);
      this.username = "";
      this.password = "";
    } else {
      console.log("Por favor, complete todos los campos");
    }
  }

  onInputChange(event: any, inputName: string) {
    console.log(
      `Se ingresó texto en el campo ${inputName}:`,
      event.target.value
    );
  }

  onRememberMeChange(event: any) {
    console.log('Checkbox "Remember Me" activado:', event.detail.checked);
  }
}
