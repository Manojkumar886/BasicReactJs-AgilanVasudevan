import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap-icons/font/bootstrap-icons.css'

export var Samplecreationbs=()=>
{
    return(
        <>
        <h1 className="text-center"><i class="bi bi-suit-heart-fill"></i>PIKACHU CARDS</h1>
        <div className="row justify-content-center">
        <div className="card bg-danger col-5 text-center">
            <div className="card-body">
                <h1 className="text-center card-title">Global Mobile Solution</h1>
                <p className="card-subtitle">Provides offline support so that cards can be viewed anytime. Auto-refresh to ensure data present in the card is updated regularly. Notification features include push notifications, reminders, and geo-fenced alerts</p>
                <img src="./pikachu.png" className="card-img"/>
                <p className="text-warning fs-2 text-uppercase ">Starting $8 Ending $100</p>
                <p className="fw-bold fs-5">“A smartphone is an addictive device which traps a soul into a lifeless planet full of lives”</p>
                <button className="btn btn-dark text-light float-end col-5">ReadMore</button>
            </div>
        </div>
    </div>
        </>

    );
}