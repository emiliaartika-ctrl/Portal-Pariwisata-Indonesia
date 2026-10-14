
const destinations = [
  {
    name: 'Pantai Kuta',
    region: 'Bali',
    category: 'Pantai',
    description: 'Pantai populer untuk menikmati matahari terbenam.',
    price: 0
  },
  {
    name: 'Candi Borobudur',
    region: 'Jawa Tengah',
    category: 'Budaya',
    description: 'Candi bersejarah dengan relief yang memukau.',
    price: 50000
  },
  {
    name: 'Danau Toba',
    region: 'Sumatera Utara',
    category: 'Alam',
    description: 'Danau vulkanik dengan pemandangan perbukitan.',
    price: 20000
  }
];

exports.home = (req, res) => {
  res.render('pages/beranda', {
    title: 'Beranda',
    welcome: 'Jelajahi Keindahan Indonesia',
    subtitle: 'Temukan destinasi alam dan budaya Nusantara.'
  });
};

exports.about = (req, res) => {
  res.render('pages/tentang', {
    title: 'Tentang Kami'
  });
};

exports.catalog = (req, res) => {
  res.render('pages/katalog', {
    title: 'Katalog Destinasi',
    destinations
  });
};

exports.showForm = (req, res) => {
  res.render('pages/tambah', {
    title: 'Tambah Destinasi',
    error: null
  });
};

exports.addDestination = (req, res) => {
  const { name, region, category, price, description } = req.body;
  const parsedPrice = Number(price);

  if (
    !name || !region || !category ||
    price === '' || !description ||
    !Number.isFinite(parsedPrice) || parsedPrice < 0
  ) {
    return res.status(400).render('pages/tambah', {
      title: 'Tambah Destinasi',
      error: 'Semua kolom wajib diisi dengan benar.'
    });
  }

  destinations.push({
    name: name.trim(),
    region: region.trim(),
    category,
    description: description.trim(),
    price: parsedPrice
  });

  console.log('Data destinasi:', req.body);

  res.redirect('/katalog');
};
