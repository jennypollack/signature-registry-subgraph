import { BigInt, log } from "@graphprotocol/graph-ts"
import { Contract, Registered, NewOwner } from "../generated/Contract/Contract"
import { Entry } from "../generated/schema"

// id: ID!
// functionName: String!
// functionSig: String!

export function handleRegistered(event: Registered): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entry = Entry.load(event.params.method.toString())
  if (entry == null) {
    entry = new Entry(event.params.method.toString())
    entry.functionName = event.params.method.toString()
    entry.functionSig = event.params.signature.toHex()
    entry.save()
  }

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.


  // let contract = Contract.bind(event.address)

  // log.debug('total sigs {}', [contract.totalSignatures()])

}
