// ./src/api/subscriber/content-types/subscriber/lifecycles.ts

export default {
    async beforeCreate(event) {
      const { data } = event.params;
      console.log("Before creating subscriber:", data);
  
      // Set joindate to current date and time if not provided
      if (!data.joindate) {
        console.log("Setting joindate to current date:", new Date());
        data.joindate = new Date();
      }
    },
  };
  