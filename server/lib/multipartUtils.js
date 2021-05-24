import parser from 'parse-multipart';

const multipart = {};

const getBoundary = (buffer) => {
  var finder = /--(----\w+)\b/;
  var boundary = buffer.toString().match(finder);
  return boundary ? boundary[1] : null;
};

const parse = (buffer) => {
  var boundary = getBoundary(buffer);
  return parser.Parse(buffer, boundary);
};

multipart.getFile = (buffer) => {
  var parts = parse(buffer);
  for (var part of parts) {
    // return first part with filename and data keys
    if (part.filename && part.data) {
      return part;
    }
  }
  return null;
};

export default multipart;
