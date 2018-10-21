import { Component, OnInit } from '@angular/core';
import { GistService } from '../../gist.service';
//import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-kanboard',
  templateUrl: './kanboard.component.html',
  styleUrls: ['./kanboard.component.scss']
})

export class KanboardComponent implements OnInit {

  model: any = {};
  //gistsBase: any[];
  gistsBase: gistsBase[]=[];
  //gistsBaseMent:gistsBaseMent[]=[];
  gistsBaseProgress:gistsBaseProgress[]=[];
  gistsBaseDone:gistsBaseDone[]=[];



   addToList(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }


  // onDrop(event: CdkDragDrop<string[]>) {
  //   console.log("Moving card");
  //   moveItemInArray(this.gistsBaseProgress, event.previousIndex, event.currentIndex);
  // }


  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }


  constructor(private GistService: GistService) { }


  ngOnInit() {
  	//this.file_id = 0;
  	this.model.files = {

  	}
    // this.gistsBase = [{"url":"https://api.github.com/gists/1d99b5d9528a92bd64ebde99486d570d","content": "Build the BFR", "forks_url":"https://api.github.com/gists/1d99b5d9528a92bd64ebde99486d570d/forks","commits_url":"https://api.github.com/gists/1d99b5d9528a92bd64ebde99486d570d/commits","id":"1d99b5d9528a92bd64ebde99486d570d","node_id":"MDQ6R2lzdDFkOTliNWQ5NTI4YTkyYmQ2NGViZGU5OTQ4NmQ1NzBk","git_pull_url":"https://gist.github.com/1d99b5d9528a92bd64ebde99486d570d.git","git_push_url":"https://gist.github.com/1d99b5d9528a92bd64ebde99486d570d.git","html_url":"https://gist.github.com/1d99b5d9528a92bd64ebde99486d570d","files":{"gist_ban_file":{"filename":"gist_ban_file","type":"text/plain","language":null,"raw_url":"https://gist.githubusercontent.com/Trapsta/1d99b5d9528a92bd64ebde99486d570d/raw/13fac87e2013a1573646e688574c1e08b53b6845/gist_ban_file","size":16}},"public":false,"created_at":"2018-10-12T10:11:25Z","updated_at":"2018-10-12T13:10:47Z","description":"Done","comments":0,"user":null,"comments_url":"https://api.github.com/gists/1d99b5d9528a92bd64ebde99486d570d/comments","owner":{"login":"Trapsta","id":276316,"node_id":"MDQ6VXNlcjI3NjMxNg==","avatar_url":"https://avatars0.githubusercontent.com/u/276316?v=4","gravatar_id":"","url":"https://api.github.com/users/Trapsta","html_url":"https://github.com/Trapsta","followers_url":"https://api.github.com/users/Trapsta/followers","following_url":"https://api.github.com/users/Trapsta/following{/other_user}","gists_url":"https://api.github.com/users/Trapsta/gists{/gist_id}","starred_url":"https://api.github.com/users/Trapsta/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/Trapsta/subscriptions","organizations_url":"https://api.github.com/users/Trapsta/orgs","repos_url":"https://api.github.com/users/Trapsta/repos","events_url":"https://api.github.com/users/Trapsta/events{/privacy}","received_events_url":"https://api.github.com/users/Trapsta/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/666805940161848570af8ae27099ef5b","content": "Create Tesla Model T concepts","forks_url":"https://api.github.com/gists/666805940161848570af8ae27099ef5b/forks","commits_url":"https://api.github.com/gists/666805940161848570af8ae27099ef5b/commits","id":"666805940161848570af8ae27099ef5b","node_id":"MDQ6R2lzdDY2NjgwNTk0MDE2MTg0ODU3MGFmOGFlMjcwOTllZjVi","git_pull_url":"https://gist.github.com/666805940161848570af8ae27099ef5b.git","git_push_url":"https://gist.github.com/666805940161848570af8ae27099ef5b.git","html_url":"https://gist.github.com/666805940161848570af8ae27099ef5b","files":{"gist_ban_file":{"filename":"gist_ban_file","type":"text/plain","language":null,"raw_url":"https://gist.githubusercontent.com/Trapsta/666805940161848570af8ae27099ef5b/raw/91c99ab656e9c3da83c4306c593f24f1de2c71cf/gist_ban_file","size":20}},"public":true,"created_at":"2018-10-11T15:47:30Z","updated_at":"2018-10-12T11:42:23Z","description":"Done","comments":0,"user":null,"comments_url":"https://api.github.com/gists/666805940161848570af8ae27099ef5b/comments","owner":{"login":"Trapsta","id":276316,"node_id":"MDQ6VXNlcjI3NjMxNg==","avatar_url":"https://avatars0.githubusercontent.com/u/276316?v=4","gravatar_id":"","url":"https://api.github.com/users/Trapsta","html_url":"https://github.com/Trapsta","followers_url":"https://api.github.com/users/Trapsta/followers","following_url":"https://api.github.com/users/Trapsta/following{/other_user}","gists_url":"https://api.github.com/users/Trapsta/gists{/gist_id}","starred_url":"https://api.github.com/users/Trapsta/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/Trapsta/subscriptions","organizations_url":"https://api.github.com/users/Trapsta/orgs","repos_url":"https://api.github.com/users/Trapsta/repos","events_url":"https://api.github.com/users/Trapsta/events{/privacy}","received_events_url":"https://api.github.com/users/Trapsta/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/a4440350c5ffe545892c505d01da16f6","content": "SpaceX presentantion","forks_url":"https://api.github.com/gists/a4440350c5ffe545892c505d01da16f6/forks","commits_url":"https://api.github.com/gists/a4440350c5ffe545892c505d01da16f6/commits","id":"a4440350c5ffe545892c505d01da16f6","node_id":"MDQ6R2lzdGE0NDQwMzUwYzVmZmU1NDU4OTJjNTA1ZDAxZGExNmY2","git_pull_url":"https://gist.github.com/a4440350c5ffe545892c505d01da16f6.git","git_push_url":"https://gist.github.com/a4440350c5ffe545892c505d01da16f6.git","html_url":"https://gist.github.com/a4440350c5ffe545892c505d01da16f6","files":{"gist_ban_file":{"filename":"gist_ban_file","type":"text/plain","language":null,"raw_url":"https://gist.githubusercontent.com/Trapsta/a4440350c5ffe545892c505d01da16f6/raw/e686978a71ebe8c28ed13eadf12ddc56a1f1e56a/gist_ban_file","size":25}},"public":false,"created_at":"2018-10-10T09:04:16Z","updated_at":"2018-10-12T13:08:17Z","description":"Done","comments":0,"user":null,"comments_url":"https://api.github.com/gists/a4440350c5ffe545892c505d01da16f6/comments","owner":{"login":"Trapsta","id":276316,"node_id":"MDQ6VXNlcjI3NjMxNg==","avatar_url":"https://avatars0.githubusercontent.com/u/276316?v=4","gravatar_id":"","url":"https://api.github.com/users/Trapsta","html_url":"https://github.com/Trapsta","followers_url":"https://api.github.com/users/Trapsta/followers","following_url":"https://api.github.com/users/Trapsta/following{/other_user}","gists_url":"https://api.github.com/users/Trapsta/gists{/gist_id}","starred_url":"https://api.github.com/users/Trapsta/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/Trapsta/subscriptions","organizations_url":"https://api.github.com/users/Trapsta/orgs","repos_url":"https://api.github.com/users/Trapsta/repos","events_url":"https://api.github.com/users/Trapsta/events{/privacy}","received_events_url":"https://api.github.com/users/Trapsta/received_events","type":"User","site_admin":false},"truncated":false}]
    // this.gistsBaseProgress = [{"url":"https://api.github.com/gists/1d99b5d9528a92bd64ebde99486d570d","content": "Finish Kanban app","forks_url":"https://api.github.com/gists/1d99b5d9528a92bd64ebde99486d570d/forks","commits_url":"https://api.github.com/gists/1d99b5d9528a92bd64ebde99486d570d/commits","id":"1d99b5d9528a92bd64ebde99486d570d","node_id":"MDQ6R2lzdDFkOTliNWQ5NTI4YTkyYmQ2NGViZGU5OTQ4NmQ1NzBk","git_pull_url":"https://gist.github.com/1d99b5d9528a92bd64ebde99486d570d.git","git_push_url":"https://gist.github.com/1d99b5d9528a92bd64ebde99486d570d.git","html_url":"https://gist.github.com/1d99b5d9528a92bd64ebde99486d570d","files":{"gist_ban_file":{"filename":"gist_ban_file","type":"text/plain","language":null,"raw_url":"https://gist.githubusercontent.com/Trapsta/1d99b5d9528a92bd64ebde99486d570d/raw/13fac87e2013a1573646e688574c1e08b53b6845/gist_ban_file","size":16}},"public":false,"created_at":"2018-10-12T10:11:25Z","updated_at":"2018-10-12T13:10:47Z","description":"In progress","comments":0,"user":null,"comments_url":"https://api.github.com/gists/1d99b5d9528a92bd64ebde99486d570d/comments","owner":{"login":"Trapsta","id":276316,"node_id":"MDQ6VXNlcjI3NjMxNg==","avatar_url":"https://avatars0.githubusercontent.com/u/276316?v=4","gravatar_id":"","url":"https://api.github.com/users/Trapsta","html_url":"https://github.com/Trapsta","followers_url":"https://api.github.com/users/Trapsta/followers","following_url":"https://api.github.com/users/Trapsta/following{/other_user}","gists_url":"https://api.github.com/users/Trapsta/gists{/gist_id}","starred_url":"https://api.github.com/users/Trapsta/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/Trapsta/subscriptions","organizations_url":"https://api.github.com/users/Trapsta/orgs","repos_url":"https://api.github.com/users/Trapsta/repos","events_url":"https://api.github.com/users/Trapsta/events{/privacy}","received_events_url":"https://api.github.com/users/Trapsta/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/666805940161848570af8ae27099ef5b","content": "UX Design for VR app","forks_url":"https://api.github.com/gists/666805940161848570af8ae27099ef5b/forks","commits_url":"https://api.github.com/gists/666805940161848570af8ae27099ef5b/commits","id":"666805940161848570af8ae27099ef5b","node_id":"MDQ6R2lzdDY2NjgwNTk0MDE2MTg0ODU3MGFmOGFlMjcwOTllZjVi","git_pull_url":"https://gist.github.com/666805940161848570af8ae27099ef5b.git","git_push_url":"https://gist.github.com/666805940161848570af8ae27099ef5b.git","html_url":"https://gist.github.com/666805940161848570af8ae27099ef5b","files":{"gist_ban_file":{"filename":"gist_ban_file","type":"text/plain","language":null,"raw_url":"https://gist.githubusercontent.com/Trapsta/666805940161848570af8ae27099ef5b/raw/91c99ab656e9c3da83c4306c593f24f1de2c71cf/gist_ban_file","size":20}},"public":true,"created_at":"2018-10-11T15:47:30Z","updated_at":"2018-10-12T11:42:23Z","description":"In progress","comments":0,"user":null,"comments_url":"https://api.github.com/gists/666805940161848570af8ae27099ef5b/comments","owner":{"login":"Trapsta","id":276316,"node_id":"MDQ6VXNlcjI3NjMxNg==","avatar_url":"https://avatars0.githubusercontent.com/u/276316?v=4","gravatar_id":"","url":"https://api.github.com/users/Trapsta","html_url":"https://github.com/Trapsta","followers_url":"https://api.github.com/users/Trapsta/followers","following_url":"https://api.github.com/users/Trapsta/following{/other_user}","gists_url":"https://api.github.com/users/Trapsta/gists{/gist_id}","starred_url":"https://api.github.com/users/Trapsta/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/Trapsta/subscriptions","organizations_url":"https://api.github.com/users/Trapsta/orgs","repos_url":"https://api.github.com/users/Trapsta/repos","events_url":"https://api.github.com/users/Trapsta/events{/privacy}","received_events_url":"https://api.github.com/users/Trapsta/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/a4440350c5ffe545892c505d01da16f6","content": "Hardware diagnostics","forks_url":"https://api.github.com/gists/a4440350c5ffe545892c505d01da16f6/forks","commits_url":"https://api.github.com/gists/a4440350c5ffe545892c505d01da16f6/commits","id":"a4440350c5ffe545892c505d01da16f6","node_id":"MDQ6R2lzdGE0NDQwMzUwYzVmZmU1NDU4OTJjNTA1ZDAxZGExNmY2","git_pull_url":"https://gist.github.com/a4440350c5ffe545892c505d01da16f6.git","git_push_url":"https://gist.github.com/a4440350c5ffe545892c505d01da16f6.git","html_url":"https://gist.github.com/a4440350c5ffe545892c505d01da16f6","files":{"gist_ban_file":{"filename":"gist_ban_file","type":"text/plain","language":null,"raw_url":"https://gist.githubusercontent.com/Trapsta/a4440350c5ffe545892c505d01da16f6/raw/e686978a71ebe8c28ed13eadf12ddc56a1f1e56a/gist_ban_file","size":25}},"public":false,"created_at":"2018-10-10T09:04:16Z","updated_at":"2018-10-12T13:08:17Z","description":"In progress","comments":0,"user":null,"comments_url":"https://api.github.com/gists/a4440350c5ffe545892c505d01da16f6/comments","owner":{"login":"Trapsta","id":276316,"node_id":"MDQ6VXNlcjI3NjMxNg==","avatar_url":"https://avatars0.githubusercontent.com/u/276316?v=4","gravatar_id":"","url":"https://api.github.com/users/Trapsta","html_url":"https://github.com/Trapsta","followers_url":"https://api.github.com/users/Trapsta/followers","following_url":"https://api.github.com/users/Trapsta/following{/other_user}","gists_url":"https://api.github.com/users/Trapsta/gists{/gist_id}","starred_url":"https://api.github.com/users/Trapsta/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/Trapsta/subscriptions","organizations_url":"https://api.github.com/users/Trapsta/orgs","repos_url":"https://api.github.com/users/Trapsta/repos","events_url":"https://api.github.com/users/Trapsta/events{/privacy}","received_events_url":"https://api.github.com/users/Trapsta/received_events","type":"User","site_admin":false},"truncated":false}]
    // this.gistsBaseDone = [{"url":"https://api.github.com/gists/1d99b5d9528a92bd64ebde99486d570d","content": "Meet the Blockchain Team","forks_url":"https://api.github.com/gists/1d99b5d9528a92bd64ebde99486d570d/forks","commits_url":"https://api.github.com/gists/1d99b5d9528a92bd64ebde99486d570d/commits","id":"1d99b5d9528a92bd64ebde99486d570d","node_id":"MDQ6R2lzdDFkOTliNWQ5NTI4YTkyYmQ2NGViZGU5OTQ4NmQ1NzBk","git_pull_url":"https://gist.github.com/1d99b5d9528a92bd64ebde99486d570d.git","git_push_url":"https://gist.github.com/1d99b5d9528a92bd64ebde99486d570d.git","html_url":"https://gist.github.com/1d99b5d9528a92bd64ebde99486d570d","files":{"gist_ban_file":{"filename":"gist_ban_file","type":"text/plain","language":null,"raw_url":"https://gist.githubusercontent.com/Trapsta/1d99b5d9528a92bd64ebde99486d570d/raw/13fac87e2013a1573646e688574c1e08b53b6845/gist_ban_file","size":16}},"public":false,"created_at":"2018-10-12T10:11:25Z","updated_at":"2018-10-12T13:10:47Z","description":"Todo","comments":0,"user":null,"comments_url":"https://api.github.com/gists/1d99b5d9528a92bd64ebde99486d570d/comments","owner":{"login":"Trapsta","id":276316,"node_id":"MDQ6VXNlcjI3NjMxNg==","avatar_url":"https://avatars0.githubusercontent.com/u/276316?v=4","gravatar_id":"","url":"https://api.github.com/users/Trapsta","html_url":"https://github.com/Trapsta","followers_url":"https://api.github.com/users/Trapsta/followers","following_url":"https://api.github.com/users/Trapsta/following{/other_user}","gists_url":"https://api.github.com/users/Trapsta/gists{/gist_id}","starred_url":"https://api.github.com/users/Trapsta/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/Trapsta/subscriptions","organizations_url":"https://api.github.com/users/Trapsta/orgs","repos_url":"https://api.github.com/users/Trapsta/repos","events_url":"https://api.github.com/users/Trapsta/events{/privacy}","received_events_url":"https://api.github.com/users/Trapsta/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/666805940161848570af8ae27099ef5b","content": "Routine Backups","forks_url":"https://api.github.com/gists/666805940161848570af8ae27099ef5b/forks","commits_url":"https://api.github.com/gists/666805940161848570af8ae27099ef5b/commits","id":"666805940161848570af8ae27099ef5b","node_id":"MDQ6R2lzdDY2NjgwNTk0MDE2MTg0ODU3MGFmOGFlMjcwOTllZjVi","git_pull_url":"https://gist.github.com/666805940161848570af8ae27099ef5b.git","git_push_url":"https://gist.github.com/666805940161848570af8ae27099ef5b.git","html_url":"https://gist.github.com/666805940161848570af8ae27099ef5b","files":{"gist_ban_file":{"filename":"gist_ban_file","type":"text/plain","language":null,"raw_url":"https://gist.githubusercontent.com/Trapsta/666805940161848570af8ae27099ef5b/raw/91c99ab656e9c3da83c4306c593f24f1de2c71cf/gist_ban_file","size":20}},"public":true,"created_at":"2018-10-11T15:47:30Z","updated_at":"2018-10-12T11:42:23Z","description":"Todo","comments":0,"user":null,"comments_url":"https://api.github.com/gists/666805940161848570af8ae27099ef5b/comments","owner":{"login":"Trapsta","id":276316,"node_id":"MDQ6VXNlcjI3NjMxNg==","avatar_url":"https://avatars0.githubusercontent.com/u/276316?v=4","gravatar_id":"","url":"https://api.github.com/users/Trapsta","html_url":"https://github.com/Trapsta","followers_url":"https://api.github.com/users/Trapsta/followers","following_url":"https://api.github.com/users/Trapsta/following{/other_user}","gists_url":"https://api.github.com/users/Trapsta/gists{/gist_id}","starred_url":"https://api.github.com/users/Trapsta/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/Trapsta/subscriptions","organizations_url":"https://api.github.com/users/Trapsta/orgs","repos_url":"https://api.github.com/users/Trapsta/repos","events_url":"https://api.github.com/users/Trapsta/events{/privacy}","received_events_url":"https://api.github.com/users/Trapsta/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/a4440350c5ffe545892c505d01da16f6","content": "Conference call","forks_url":"https://api.github.com/gists/a4440350c5ffe545892c505d01da16f6/forks","commits_url":"https://api.github.com/gists/a4440350c5ffe545892c505d01da16f6/commits","id":"a4440350c5ffe545892c505d01da16f6","node_id":"MDQ6R2lzdGE0NDQwMzUwYzVmZmU1NDU4OTJjNTA1ZDAxZGExNmY2","git_pull_url":"https://gist.github.com/a4440350c5ffe545892c505d01da16f6.git","git_push_url":"https://gist.github.com/a4440350c5ffe545892c505d01da16f6.git","html_url":"https://gist.github.com/a4440350c5ffe545892c505d01da16f6","files":{"gist_ban_file":{"filename":"gist_ban_file","type":"text/plain","language":null,"raw_url":"https://gist.githubusercontent.com/Trapsta/a4440350c5ffe545892c505d01da16f6/raw/e686978a71ebe8c28ed13eadf12ddc56a1f1e56a/gist_ban_file","size":25}},"public":false,"created_at":"2018-10-10T09:04:16Z","updated_at":"2018-10-12T13:08:17Z","Todo":"In progress","comments":0,"user":null,"comments_url":"https://api.github.com/gists/a4440350c5ffe545892c505d01da16f6/comments","owner":{"login":"Trapsta","id":276316,"node_id":"MDQ6VXNlcjI3NjMxNg==","avatar_url":"https://avatars0.githubusercontent.com/u/276316?v=4","gravatar_id":"","url":"https://api.github.com/users/Trapsta","html_url":"https://github.com/Trapsta","followers_url":"https://api.github.com/users/Trapsta/followers","following_url":"https://api.github.com/users/Trapsta/following{/other_user}","gists_url":"https://api.github.com/users/Trapsta/gists{/gist_id}","starred_url":"https://api.github.com/users/Trapsta/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/Trapsta/subscriptions","organizations_url":"https://api.github.com/users/Trapsta/orgs","repos_url":"https://api.github.com/users/Trapsta/repos","events_url":"https://api.github.com/users/Trapsta/events{/privacy}","received_events_url":"https://api.github.com/users/Trapsta/received_events","type":"User","site_admin":false},"truncated":false}]
  }

  onSubmit() {


  	var gist = {
  		description: "Todo",
  		public: this.model.public,
  		content: this.model.task
  	}

  	this.GistService.createGist(gist).subscribe(data => {
  			var gistId = data["url"];
  			var gistDate= data["created_at"];
            //console.log(gistDate);
        });
  }

  getGists() {
  	this.GistService.populateGists().subscribe(data => {
  		//console.log(data);
  		for (let i = 0; i < data.length; i++) {
  			var desc = data[i]["description"].toLowerCase();
        var base_url = "https://api.github.com/gists/";
        var gist_url = data[i]['url'];
        var gist_id = gist_url.replace(base_url, "");
        var content = '';


        this.GistService.getGist(gist_id)
        .subscribe(function success(response){
          content = (response['gist_ban_file']['content']);
          data[i]['content'] = content;
        }, function error(response){
          console.log(response);
        });
        

        //var content = this.fetchGist(gist_id);        
  			//console.log(this.fetchGist(gist_id));
        // this.fetchGist(gist_id).subscribe(data => {
        //     console.log(data);
        // });

  			if ( desc === "todo" ) {
  				//console.log(this.gistsBase);
          // data[i]['content'] = content;
  				this.gistsBase.push(data[i]);
          //console.log(this.gistsBase);
  			} 
        else if (desc === "in progress" ) {
          this.gistsBaseProgress.push(data[i]);
          //console.log(this.gistsBaseProgress);
        } else if (desc === "done") {
          this.gistsBaseDone.push(data[i]);
          //console.log(this.gistsBaseDone);
        }
  		}

  		

  	});

    // console.log(gistsBase.length);

  }

  fetchGist(g_id) {
    //console.log(g_id);
    //g_id = "1d99b5d9528a92bd64ebde99486d570d";
    this.GistService.getGist(g_id).subscribe(data => {
      //data[i]['content'] = file_data[0]['content'];
      //data = data;
      //console.log(data["gist_ban_file"]["content"]);
      return data["gist_ban_file"]["content"];
    });
  }


  attachGist() {
    // var gists = this.gistsBase;
    for(let i = 0; i<this.gistsBase.length; i++) {
      var base_url = "https://api.github.com/gists/";
      var gist_url = this.gistsBase[i]['url'];
      var gist_id = gist_url.replace(base_url, "");
      var content ="";

      this.GistService.getGist(gist_id).subscribe(data => {
        content = data["gist_ban_file"]["content"];
      });

      this.gistsBase[i]['content'] = content;

      //console.log(this.gistsBase[i]);

    }
  }


}
