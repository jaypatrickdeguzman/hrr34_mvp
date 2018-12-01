/* Action Creators */

const actions = {
  swipe: isLike => {
    return {
      type: "SWIPE_ACTION",
      payload: isLike // boolean
    };
  }
};

export default actions;
