
const calculations=(income)=>{
    let seving_income=null
    if(income<250000){
        const textAmount=0
        seving_income = income-textAmount
        return textAmount
    }
    if(income>=250000 && income<500000){
        const textAmount = (income*10)/100
        seving_income = income-textAmount
        return textAmount
    }
    if(income>=500000 && income<1000000){
        const textAmount = (income*20)/100
        seving_income = income-textAmount
        return textAmount
    }
    if(income>=1000000){
        const textAmount = (income*30)/100
        seving_income = income-textAmount
        return textAmount
    }
}

module.exports=calculations

console.log(calculations(1000000));