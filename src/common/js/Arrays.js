const NewArray = new Array('1,2,3,4,5,6,7,8,9,10')
const DOM = document.getElementById('root');
const DIV = document.createElement('div');
function Arrays (){
	//快速生成
	const newA = Array.from(Array(100)).map((x,i)=>i+1).filter(x=>x%2===0).filter(x=>x%3===0)

	newA.map((i)=>{
		const chidDIV = document.createElement('div');
		chidDIV.classList.add('item_child');
		chidDIV.innerText = i
		DIV.append(chidDIV);
	})
	DOM.append(DIV);
}
export default Arrays;