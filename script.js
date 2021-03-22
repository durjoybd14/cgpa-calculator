// subject cgpa

const sub1 = () => {
    let cg1 = document.getElementById('subOne').value;
    cg1 = parseFloat(cg1)
    console.log('cg1', cg1, typeof cg1);
    return cg1;
}

const sub2 = () => {
    let cg2 = document.getElementById('subTwo').value;
    cg2 = parseFloat(cg2);
    console.log('cg2', cg2, typeof cg2);
    return cg2;

}
const sub3 = () => {
    let cg3 = document.getElementById('subThree').value;
    cg3 = parseFloat(cg3)
    console.log('cg3', cg3, typeof cg3);
    return cg3;


}
const sub4 = () => {
    let cg4 = document.getElementById('subFour').value;
    cg4 = parseFloat(cg4)
    console.log('cg4', cg4, typeof cg4);
    return cg4;

}
const sub5 = () => {
    let cg5 = document.getElementById('subFive').value;
    cg5 = parseFloat(cg5)
    console.log('cg5', cg5, typeof cg5);
    return cg5;

}
const sub6 = () => {
    let ccg6 = document.getElementById('subSix').value;
    ccg6 = parseFloat(ccg6)
    console.log('ccg6', ccg6, typeof ccg6);
    return ccg6;

}

//credit
const creditSub1 = () => {
    let ccg1 = document.getElementById('creditSubOne').value;
    ccg1 = parseFloat(ccg1)
    console.log('ccg1', ccg1, typeof ccg1);
    return ccg1;
}

const creditSub2 = () => {
    let ccg2 = document.getElementById('creditSubTwo').value;
    ccg2 = parseFloat(ccg2);
    console.log('ccg2', ccg2, typeof ccg2);
    return ccg2;

}
const creditSub3 = () => {
    let ccg3 = document.getElementById('creditSubThree').value;
    ccg3 = parseFloat(ccg3)
    console.log('ccg3', ccg3, typeof ccg3);
    return ccg3;


}
const creditSub4 = () => {
    let ccg4 = document.getElementById('creditSubFour').value;
    ccg4 = parseFloat(ccg4)
    console.log('ccg4', ccg4, typeof ccg4);
    return ccg4;

}
const creditSub5 = () => {
    let ccg5 = document.getElementById('creditSubFive').value;
    ccg5 = parseFloat(ccg5)
    console.log('ccg5', ccg5, typeof ccg5);
    return ccg5;

}
const creditSub6 = () => {
    let ccg6 = document.getElementById('creditSubSix').value;
    ccg6 = parseFloat(ccg6)
    console.log('ccg6', ccg6, typeof ccg6);
    return ccg6;

}

const cgpaFinal = () => {
    const sumOfCreditMultiplierOfSub = (creditSub1() * sub1()) + (creditSub2() * sub2()) + (creditSub3() * sub3()) + (creditSub4() * sub4()) + (creditSub5() * sub5()) + (creditSub6() * sub6());
    const subOfCredit = creditSub1() + creditSub2() + creditSub3() + creditSub4() + creditSub5() + creditSub6();
    let cgpa = sumOfCreditMultiplierOfSub / subOfCredit;
    cgpa = cgpa.toFixed(5)
    document.getElementById('cgpa').innerHTML = cgpa;

}