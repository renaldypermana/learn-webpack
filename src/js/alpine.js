import data from "../common/serviceAPI";

window.alpineRender = function() {
	return{
		userList: [],
		postList: [],
		connect(){
			data.getUsers()
			.then(json => {
				this.userList = json;
			});
			/*data.getPosts()
      .then(json => {
        this.postList = json;
      })*/
		}
	}
}
