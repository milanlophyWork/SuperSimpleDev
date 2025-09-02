
export const deliveryOptions = [ // step 1 : save the data
    {
        id: '1', // normalizing the data // the given id is passed to cart to get these properties 
        deliveryDays: 7,
        priceCents: 0
    },
    {
        id : '2',
        deliveryDays : 3,
        priceCents : 499
    },
    {
        id: '3',
        deliveryDays : 1,
        priceCents : 999
    }
]

export function getDeliveryOption(deliveryOptionId){
    let deliveryOption

    deliveryOptions.forEach((option)=> {
        if(option.id === deliveryOptionId){
            deliveryOption = option
        }
    })
    return deliveryOption || deliveryOptions[0]
}