function AddMember(){
    let member = document.querySelector('#member_name');
    let list = document.querySelector('.list_of_members');
	let newOption = new Option(`${member.value}`, '');
	list.prepend(newOption);
	newOption.classList = "winner";
	member.value = "";
}

function AddWinner(){
	let form = document.querySelector('.member_list');
	let m = document.querySelector('.list_of_members');
	if (m.value != 1){
		let select = document.createElement('select');
		select.classList = "select list_of_members";
		form.append(select);
	}
}


function CheckData(event) {
    let member = document.querySelector('#member_name');
    let eventName = document.querySelector('#event_name');

	let messageName = document.querySelector("#message_name")
	let messageMember = document.querySelector("#message_member")

	event.preventDefault();

	if (!/^[А-Яа-яЁё\s]+$/.test(member.value)){
    member.style.border = "2px solid red";
    messageMember.textContent = 'поле "участники" доолжно содержать только кириллицу';
	messageMember.style.color = "red";
	}

	if (!/^[А-Яа-яЁё\s]+$/.test(eventName.value)){
    eventName.style.border = "2px solid red";
    messageName.textContent = 'поле "название мероприятия" доолжно содержать только кириллицу';
	messageName.style.color = "red";
	}	
}