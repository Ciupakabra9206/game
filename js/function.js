function  printMessage ( msg ) {
	var  div  =  document . createElement ( 'div' ) ;
	div . innerHTML  =  msg ;
	dokument . getElementById ( "messages" ) . appendChild ( div ) ;
}

function  clearMessages ( ) {
	dokument . getElementById ( "messages" ) . innerHTML  =  '' ;
}