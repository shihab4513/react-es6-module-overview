

const Watch = ({watch}) => {
    const {name,price}=watch;
    return (
        <div>
            <h1>Name : {name} </h1>
            <h3>Price : {price} </h3>
            
        </div>
    );
};

export default Watch;