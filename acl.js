var canAccessAdmin = function (req, res, next) {
  if (typeof req.user !== 'undefined' && req.user.role === 'admin') {
    next();
  } else if (typeof req.user === 'undefined') {
    res.redirect('/login');
  } else {
    res.redirect('/');
  }
};

var isLoggedIn = function (req, res, next) {
  if (typeof req.user !== 'undefined') {
    next();
  } else {
    res.redirect('/login');
  }
};

module.exports = {
  canAccessAdmin: canAccessAdmin,
  isLoggedIn: isLoggedIn
};

