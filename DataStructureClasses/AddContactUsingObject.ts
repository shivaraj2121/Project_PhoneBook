
interface contact{
    phoneNumber:string;
    aternatePhoneNumber:String

}

export default class PhoneBook{
    contacts:{[name:string]:contact}
    constructor(){
      this.contacts={}
}
addContact(name:any,phoneNumber:any,aternatePhoneNumber?:any)
{

    if(!this.contacts[name])  {
       this.contacts[name]={phoneNumber,aternatePhoneNumber}
       console.log(`contact' ${name}'added successfully,`)
    }else{
        console.log(`contact '${name}' already exisr`)
    }
}
updateContact(name:any,newPhoneNumber:any,alternewPhoneNumber?:any)
{
   if(this.contacts[name]){
      this.contacts[name].phoneNumber=newPhoneNumber;
     if(alternewPhoneNumber){
        this.contacts[name].aternatePhoneNumber=alternewPhoneNumber;
     }
        console.log(`cotnact '${name}' updated successfully`)
  }else{
       console.log(`contact '${name}' not found`)
  }  }

deleteContact(name:any)
{
   if(this.contacts[name])
        {
           delete this.contacts[name]
           console.log(`contact '${name}' delteted successfully `)
        }else{
           console.log(`contact' ${name} 'nit found`)
        }
}
displayContact(){
   const cotnactNames=Object.keys(this.contacts)
   if(cotnactNames.length>0)
    {
        console.log('contacts:')
        cotnactNames.forEach(name =>{
            const contact =this.contacts[name];
            console.log(`name :${name}`)
            console.log(`phonenumber ${contact.phoneNumber}`)
        if(contact.aternatePhoneNumber){
            console.log(`Alternatephonenumber ${contact.aternatePhoneNumber}`)
        }
        })
    }else{
        console.log('phone book is empty')
    }
}

}

