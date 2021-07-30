export const addNotification = (content = "", imgURL = "") => {

    const idNotif = `notif${Math.floor(Math.random()*10000)}`;
    (document.getElementById("notificationWrapper") as HTMLElement).innerHTML+=`
    <div id="${idNotif}" class="notificationPopUp">
    ${imgURL == ""?"":`<img href="" alt="logoNotif">`}
    <p>${content}</p>
    </div>
    `;
    deleteNotif(idNotif);
}

const deleteNotif = async(id:string) => {
    await sleep(3000);
    (document.getElementById(id) as HTMLElement).remove();
}
function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }