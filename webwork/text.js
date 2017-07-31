self.onmessage=function(ev){
  console.log(ev);
  self.postMessage(ev.data+ "knight");
}
