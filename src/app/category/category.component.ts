import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../models/Category';
import { CategoryService } from '../services/categoryService/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[]=[] ;
  showForm = false;
  isEditing = false;
  category: Category={
    id: 0,
    name: ''
  };
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories ()
  }

  toggleForm() {
    this.showForm = !this.showForm; // Basculez entre afficher et masquer le formulaire
  }
  CloseForm(addForm: NgForm) {
    this.toggleForm() ;
    addForm.resetForm();

  }
  toggleEditing(id:number) {
    this.isEditing = !this.isEditing;
  }



  getAllCategories (){
    this.categoryService.getAllCategories().subscribe(
      (result) => {
        this.categories = result;
        console.log(this.categories);
      },
      (error) => {
        console.error('Error fetching providers:', error);
      }
    );

  }

  addCategory(addForm: NgForm) {
    if (addForm.valid) {
      // Vérifiez si le formulaire est valide avant d'ajouter le fournisseur
      this.categoryService.AddCategory(this.category).subscribe(
        () => {
          alert('category is added successfully');
          // Réinitialisez le formulaire après l'ajout si nécessaire
          addForm.resetForm();
        },
        (error) => {
          console.error('Error add category:', error);
        }
      );
    }
  }



  UpdateCategory(category: Category) {
    this.categoryService.UpdateCategory(category).subscribe(
      () => {
        alert('successful update.');

      },
      (error) => {
        console.error('Error update category:', error);

      }
    );
  }

  DeleteCategory(idCategory: number) {
    this.categoryService.DeleteCategory(idCategory).subscribe(
      () => {
        alert("provider"+idCategory +"is deleted  successfully");

        // La suppression a réussi, mettez à jour la liste des fournisseurs

        this.categoryService.getAllCategories();
        console.log(this.categories)
      },
      (error) => {
        console.error('Error Delete category:', error);
      }
    );
  }



 editingCategory: Category | null = null; // Ajoutez cette ligne



  setEditingCategory(category: Category | null) {
    this.editingCategory = category;
  }


}
