import avatar from '../../images/avatar.jpg';
function Images(){
	var img = new Image();
	img.src = avatar;
	var root = document.getElementById('root');
	img.classList.add('cover');
	root.append(img);
}
export default Images;
