import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { SearchLibraryPage } from './search-library.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path:'', component: SearchLibraryPage}])
  ],
  declarations: [SearchLibraryPage]
})
export class SearchLibraryPageModule {}
