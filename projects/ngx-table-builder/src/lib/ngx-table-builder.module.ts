import { NgModule } from '@angular/core';
import { NgxTableBuilderComponent } from './ngx-table-builder.component';
import { TableComponent } from './table/table.component';
import { CellComponent } from './cell/cell.component';
import { CellDefDirective, FooterCellDefDirective, HeaderCellDefDirective } from './cell/cell-def.directive';
import { RowOutletDirective } from './row/row-outlet.directive';
import { RowComponent } from './row/row.component';
import { CellOutletDirective } from './cell/cell-outlet.directive';
import { ColumnDefDirective } from './column/column-def.directive';
import { HeaderRowComponent } from './row/header-row.component';
import { FooterRowComponent } from './row/footer-row.component';
import { RowLineComponent } from './line/row-line.component';
import { ColumnLineComponent } from './line/column-line.component';


@NgModule({
  declarations: [
    NgxTableBuilderComponent,
    TableComponent,
    CellComponent,
    CellDefDirective,
    HeaderCellDefDirective,
    FooterCellDefDirective,
    RowOutletDirective,
    HeaderRowComponent,
    FooterRowComponent,
    RowComponent,
    CellOutletDirective,
    ColumnDefDirective,
    ColumnLineComponent,
    RowLineComponent,
  ],
  exports: [
    TableComponent,
    CellComponent,
    CellDefDirective,
    HeaderCellDefDirective,
    FooterCellDefDirective,
    ColumnDefDirective,
    RowOutletDirective,
    HeaderRowComponent,
    FooterRowComponent,
    RowComponent,
    ColumnLineComponent,
    RowLineComponent
  ]
})
export class NgxTableBuilderModule { }
