function Content() {
	var dom = document.getElementById('root');
	var content = document.createElement('div');
	content.innerHTML = '<div style="width:100px;height:100px;background:blue;"></div>';
	dom.append(content);
}

export default Content;