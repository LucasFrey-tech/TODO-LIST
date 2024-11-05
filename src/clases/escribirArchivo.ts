import CustomFileClass from "../file";
import path from "path";

const file: CustomFileClass = new CustomFileClass();

function writeFile() {
  file.open(path.resolve("prueba.txt"), "w");

  file.writeToFile("hola");
  file.writeToFile("mundo");

  file.close();
}
