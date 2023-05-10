import { IonAccordion, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import Card from '../components/Card/Card'
import { NavButtons } from '../components/Navigation/Ion-nav/NavButtons'

function WatchList(props) {


  return (
    <IonPage>
      <IonHeader >
        <IonToolbar  style={{paddingLeft:'20px'}}>
          <IonTitle size="large">WatchList</IonTitle>
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <ion-content className="has-header">
      <div>
       <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
        </div>
       
      
     <p>This is watchList</p>
    </div>

    </ion-content>

    </IonPage>
    
   
  )
}

export default WatchList
