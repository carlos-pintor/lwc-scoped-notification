import { LightningElement, api } from "lwc";

const notificationBaseCSS = "slds-scoped-notification slds-media slds-media_center";

export default class Scoped_notification extends LightningElement {
    @api themeCss = "";

    get notificationCSS() {
        return notificationBaseCSS + " " + this.themeCss;
    }
}