import { Component } from 'react';
import Api from './Api';
class Listing extends Component {

    async adminlogin(data) {
        return Api.post("/admin/login", data)
    }

    async contact(data) {
        return Api.post("/contact-add", data)
    }

     async ContactGet(data) {
        return Api.get("/contact-get", data)
    }

    async subscribe(data) {
        return Api.post("/subscribe/subscribe-add", data)
    }

    async SubscribeEmail() {
        return Api.get("/subscribe/subscribe-email")
    }

    async AddTeam(data) {
        return Api.post("/teams", data)
    }

    
     async Editeam(data) {
        return Api.post("/teams-edit", data)
    }
    
     async deleteteam(data) {
        return Api.post("/teams-delete", data)
    }

    async teamlist() {
        return Api.get("/teams")
    }
    render() {
        return (
            <div>
                <>

                </>
            </div>
        )
    }
}

export default Listing;