import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TreeItem, TreeFolderItem } from "../model/ui/tree-item";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'mattest';
  isDarkTheme = true;
  items = Array<TreeItem>();

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.loadItems();
  }
logout() {

}
 
onItemClick(parent, item) {
  parent.router.navigate(['list', {mode : 'all'}], { relativeTo: this.route })
}

onFavoritesClick(parent, item) {
  parent.router.navigate(['list', {mode : 'fav'}], { relativeTo: this.route })
}

onFolderClick(parent, item) {
  parent.router.navigate(['list', {mode : 'folder', folderId: item.folderId}], { relativeTo: this.route })
}


onItemClick2() {

}

loadChildrenToFolder(parentFolderItem: TreeItem) {
  const myNotesMenuSubItem = new TreeFolderItem();
  myNotesMenuSubItem.folderId = '112';
  myNotesMenuSubItem.showMenuButton = true;
  myNotesMenuSubItem.hasAddButton = true;
  myNotesMenuSubItem.onClick = this.onFolderClick;
  myNotesMenuSubItem.name = "SubChild";
  myNotesMenuSubItem.iconName = parentFolderItem.iconName
  parentFolderItem.subItems.push(myNotesMenuSubItem)
}

loadItems() {

  const allNotesMenuItem = new TreeItem();
  allNotesMenuItem.onClick = this.onItemClick;
  allNotesMenuItem.name = "All notes";
  allNotesMenuItem.iconName = 'list'
  this.items.push(allNotesMenuItem)

  const myNotesMenuItem = new TreeFolderItem();
  myNotesMenuItem.folderId = '111';
  myNotesMenuItem.showMenuButton = true;
  myNotesMenuItem.hasAddButton = true;
  myNotesMenuItem.onClick = this.onFolderClick;
  myNotesMenuItem.name = "My notes";
  myNotesMenuItem.iconName = 'folder'
  this.items.push(myNotesMenuItem)

  this.loadChildrenToFolder(myNotesMenuItem)
}

}