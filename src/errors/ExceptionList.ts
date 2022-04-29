const ExceptionList = {
  estimatedItemSizeMissing: {
    message:
      "`estimatedItemSize` is a required prop in FlashList. Please provide a value that is greater than 0.",
    type: "InvalidPropException",
  },
  refreshBooleanMissing: {
    message:
      "`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `undefined`.",
    type: "InvariantViolation",
  },
  stickyWhileHorizontalNotSupported: {
    message:
      "sticky headers are not supported when list is in horizontal mode. Remove `stickyHeaderIndices` prop.",
    type: "NotSupportedException",
  },
  columnsWhileHorizontalNotSupported: {
    message:
      "numColumns is not supported when list is in horizontal mode. Please remove or set numColumns to 1.",
    type: "NotSupportedException",
  },
  multipleViewabilityThresholdTypesNotSupported: {
    message:
      "You can set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold. Specifying both is not supported.",
    type: "MultipleViewabilityThresholdTypesException",
  },
};
export default ExceptionList;