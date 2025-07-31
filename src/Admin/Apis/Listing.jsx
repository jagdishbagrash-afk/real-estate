import { Component } from 'react';
import Api from './Api';
class Listing extends Component {

    async adminlogin(data) {
        return Api.post("/admin/login", data)
    }

    async contact(data) {
        return Api.post("/contact-add", data)
    }

    async subscribe(data) {
        return Api.post("/subscribe/subscribe-add", data)
    }
    async SubscribeEmail() {
        return Api.get("/subscribe/subscribe-email")
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