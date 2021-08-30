import {makeAutoObservable} from "mobx";

class ChangeLook {
    decidedLook = false

    constructor() {
        makeAutoObservable(this)
    }

    changeToDarkLook(){
       this.decidedLook = true
        console.log('changeToDarkLook', this.decidedLook)
    }
    changeToLightLook(){
        this.decidedLook = false
        console.log('changeToLightLook', this.decidedLook)
    }
}

export default new ChangeLook()