const dom = document.getElementById('root');
dom.innerHTML = `<div>
		<ul class="wrapper">
			<li class="wrapper">
			  <p>I' m inside element</p>
			</li>
		</ul>
		<p>I' m outside element</p>
	</div>` ;
const wrappLI = document.querySelector('.wrapper li');
// console.log(wrappLI,`wrappLI`)
// unwrap(wrappLI)
function unwrap(ele) {
	// console.log(ele.firstChild,`ele`)
  const parent = ele.parentElement
  while(ele.firstChild) {
    parent.insertBefore(ele.firstChild, ele)
  }
}
export default unwrap;