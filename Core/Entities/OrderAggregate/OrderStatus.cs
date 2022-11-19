using System.Runtime.Serialization;

namespace Core.Entities.OrderAggregate
{
    public enum  OrderStatus
    {
        [EnumMember(Value = "Pending")]
        Pending,

        [EnumMember(Value = "Payment Received")]
        PaymentReceive,

        [EnumMember(Value = "Payment Failed")]
        PaymentFailed

        //ShippedCompleted -> for real app
    }
}