
function Button(){
    
    const handleClick = () => console.log("Order Sucessful");

   return(<button onClick={handleClick}>Press To Order</button>);
}
export default Button