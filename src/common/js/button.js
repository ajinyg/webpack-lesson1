import '../../common/css/button.styl'
function Content() {
	var number = 1;
	var dom = document.getElementById('root');
	var content = document.createElement('button');
	content.innerHTML = '新增';
	dom.append(content);

	//item-container
	var itemContent = document.createElement('div');
	itemContent.classList.add('item_container');

	//onclick 
	content.onclick = function(){
		var itemView = document.createElement('div');
			itemView.classList.add('item');
		itemView.innerHTML = number++
		itemContent.append(itemView);
	}
	dom.append(itemContent);
}

export default Content;