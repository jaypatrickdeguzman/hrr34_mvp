/* Action Creators */

export default {
  swipe: isLike => {
    return {
      type: "SWIPE_ACTION",
      payload: isLike // boolean
    };
  }
};
