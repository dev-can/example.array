<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby Example Capsule -- example.array</h1>
</p>

**Purpose**

The purpose of this example is to demostrate how Bixby action and view handles array of objects (both premitive type and structure)

  - No actual API calls, only fixed lookup in /code/lib/lib.js
  - ActionGetContactByName 
    - Takes single or mulitple `TypeContactName` premitive object and output single or multiple `StructContact` strtucture object
    - Try utterance like "get contact on emily" or "get contact on paul and emily"
    - In fact, it is ok to think a single object is an array of objects with ONE element as demostrated in GetContactByName.js and StructContact.view.bxb
  - ActionCallContact
    - Takes a single `StructContact` object
    - Try utterance like "call paul", and Bixby is able to feed "paul" as `TypeContactName` to ActionGetContactByName and then feed the output as `StructContact` to ActionCallContact
    - Try utterance like "call paul and sarah", and Bixby will ask for selection since ActionCallContact set `max(One)`
  - StructContact.view.bxb
    - Although view is not the focus in this example, it is clear that `list-of` handles single object and array of objects with NO additional coding required
  - ActionConferenceCall
    - Try to implement this action by adding an action file model under /models/actions/ 
    - It will be very similar to ActionCallContact, but rememeber to set `max(Many)`
    - You need to link this action with ConferenceCall.js in the base.endpoints.bxb
    - You need to add training examples such as "conference call paul simon emily and sarah"
      - result.png shows the excution result in Bixby simulator 
      - dataflow.png shows detail how Bixby construt an array of `StructContact` objects and feed to ActionConferenceCall
    - Good luck and have fun with Bixby

**Resources**

Bixby Developer Resources:
  - Bixby Developer Center: https://bixbydevelopers.com/
  - Bixby Developer Support Help Center: https://support.bixbydevelopers.com/hc/en-us
  - You may find the  FAQ section useful as it contains articles that provide insight into common pitfalls first-time developers may encounter.

**Need Help?**
  - If you are stuck or need assistance, feel free to reach out to us. We are here to help you with any questions or point you to the right areas of the Bixby Developer Center or the Bixby Help Center. You can reach us by sending your questions via email to support@bixbydevelopers.com.
