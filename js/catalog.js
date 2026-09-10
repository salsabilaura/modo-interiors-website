/* =====================================================
   OMD INTERIOR DESAIN STUDIO
   CATALOG SYSTEM

   2 JENIS KATALOG:
   1. MATERIAL
   2. DESIGN RUANGAN
   ===================================================== */


/* =====================================================
   MATERIAL CATALOG
   ===================================================== */

const materialCategories = [

  /* ===================================================
     01 - HPL
     =================================================== */

  {
    id: 'hpl',

    name: 'HPL',

    desc:
      'Pilihan finishing untuk furnitur, kabinet, dan bidang interior.',

    image:
      'assets/katalog_bahan/hpl/hpl.png',

    variations: [

      // Tambahkan variasi HPL di sini jika diperlukan.

    ]
  },


  /* ===================================================
     02 - LANTAI SPC
     =================================================== */

  {
    id: 'spc',

    name: 'Lantai SPC',

    desc:
      'Kuat, stabil, tahan air, dan hadir dalam karakter motif kayu.',

    image:
      'assets/katalog_bahan/lantai-spc/lantai-spc.png',

    variations: [

      {
        name: 'LT-SPC-01',
        image:
          'assets/katalog_bahan/lantai-spc/LT-SPC-01.png'
      },

      {
        name: 'LT-SPC-02',
        image:
          'assets/katalog_bahan/lantai-spc/LT-SPC-02.png'
      },

      {
        name: 'LT-SPC-03',
        image:
          'assets/katalog_bahan/lantai-spc/LT-SPC-03.png'
      },

      {
        name: 'LT-SPC-04',
        image:
          'assets/katalog_bahan/lantai-spc/LT-SPC-04.png'
      }

    ]
  },


  /* ===================================================
     03 - PLAFON PVC
     =================================================== */

  {
    id: 'plafon-pvc',

    name: 'Plafon PVC',

    desc:
      'Solusi plafon praktis dengan tampilan rapi dan modern.',

    image:
      'assets/katalog_bahan/plafon-pvc/plafon-pvc.png',

    variations: [

      {
        name: 'PL-PVC-01',
        image:
          'assets/katalog_bahan/plafon-pvc/PL-PVC-01.png'
      }

    ]
  },


  /* ===================================================
     04 - LIS PLAFON PVC
     =================================================== */

  {
    id: 'lis-plafon-pvc',

    name: 'Lis Plafon PVC',

    desc:
      'Detail finishing plafon untuk menciptakan pertemuan yang rapi.',

    image:
      'assets/katalog_bahan/lis-plafon-pvc/lis-plafon-pvc.png',

    variations: [

      {
        name: 'LIS-PL-01',
        image:
          'assets/katalog_bahan/lis-plafon-pvc/LIS-PL-01.png'
      },

      {
        name: 'LIS-PL-02',
        image:
          'assets/katalog_bahan/lis-plafon-pvc/LIS-PL-02.png'
      }

    ]
  },


  /* ===================================================
     05 - PLINT LANTAI
     =================================================== */

  {
    id: 'plint',

    name: 'Plint Lantai',

    desc:
      'Finishing pertemuan lantai dan dinding yang clean dan presisi.',

    image:
      'assets/katalog_bahan/plint-lantai/plint-lantai.png',

    variations: [

      {
        name: 'PLINT-LT-01',
        image:
          'assets/katalog_bahan/plint-lantai/PLINT-LT-01.png'
      }

    ]
  },


  /* ===================================================
     06 - VINYL FLOORING
     =================================================== */

  {
    id: 'vinyl',

    name: 'Vinyl Flooring',

    desc:
      'Pilihan lantai praktis dengan beragam tampilan dan tekstur.',

    image:
      'assets/katalog_bahan/vinyl-flooring/vinyl-flooring.png',

    variations: [

      {
        name: 'VNY-FLOOR-01',
        image:
          'assets/katalog_bahan/vinyl-flooring/VNY-FLOOR-01.png'
      },

      {
        name: 'VNY-FLOOR-02',
        image:
          'assets/katalog_bahan/vinyl-flooring/VNY-FLOOR-02.png'
      }

    ]
  },


  /* ===================================================
     07 - WALLPANEL
     =================================================== */

  {
    id: 'wallpanel',

    name: 'Wallpanel',

    desc:
      'Membuat bidang dinding lebih berkarakter dengan tekstur yang elegan.',

    image:
      'assets/katalog_bahan/wallpanel/wallpanel.png',

    variations: [

      {
        name: 'WP-01',
        image:
          'assets/katalog_bahan/wallpanel/WP-01.png'
      },

      {
        name: 'WP-02',
        image:
          'assets/katalog_bahan/wallpanel/WP-02.png'
      },

      {
        name: 'WP-03',
        image:
          'assets/katalog_bahan/wallpanel/WP-03.png'
      },

      {
        name: 'WP-04',
        image:
          'assets/katalog_bahan/wallpanel/WP-04.png'
      },

      {
        name: 'WP-05',
        image:
          'assets/katalog_bahan/wallpanel/WP-05.png'
      },

      {
        name: 'WP-06',
        image:
          'assets/katalog_bahan/wallpanel/WP-06.png'
      },

      {
        name: 'WP-07',
        image:
          'assets/katalog_bahan/wallpanel/WP-07.png'
      },

      {
        name: 'WP-08',
        image:
          'assets/katalog_bahan/wallpanel/WP-08.png'
      },

      {
        name: 'WP-09',
        image:
          'assets/katalog_bahan/wallpanel/WP-09.png'
      },

      {
        name: 'WP-10',
        image:
          'assets/katalog_bahan/wallpanel/WP-10.png'
      },

      {
        name: 'WP-11',
        image:
          'assets/katalog_bahan/wallpanel/WP-11.png'
      }

    ]
  },


  /* ===================================================
     08 - WALLPANEL 3D
     =================================================== */

  {
    id: 'wallpanel3d',

    name: 'Wallpanel 3D',

    desc:
      'Permainan relief dan dimensi untuk statement wall.',

    image:
      'assets/katalog_bahan/wallpanel-3d/wallpanel-3d.png',

    variations: [

      {
        name: 'WP-3D-01',
        image:
          'assets/katalog_bahan/wallpanel-3d/WP-3D-01.png'
      },

      {
        name: 'WP-3D-02',
        image:
          'assets/katalog_bahan/wallpanel-3d/WP-3D-02.png'
      },

      {
        name: 'WP-3D-03',
        image:
          'assets/katalog_bahan/wallpanel-3d/WP-3D-03.png'
      },

      {
        name: 'WP-3D-04',
        image:
          'assets/katalog_bahan/wallpanel-3d/WP-3D-04.png'
      },

      {
        name: 'WP-3D-05',
        image:
          'assets/katalog_bahan/wallpanel-3d/WP-3D-05.png'
      },

      {
        name: 'WP-3D-06',
        image:
          'assets/katalog_bahan/wallpanel-3d/WP-3D-06.png'
      },

      {
        name: 'WP-3D-07',
        image:
          'assets/katalog_bahan/wallpanel-3d/WP-3D-07.png'
      },

      {
        name: 'WP-3D-08',
        image:
          'assets/katalog_bahan/wallpanel-3d/WP-3D-08.png'
      },

      {
        name: 'WP-3D-09',
        image:
          'assets/katalog_bahan/wallpanel-3d/WP-3D-09.png'
      }

    ]
  }

];



/* =====================================================
   DESIGN RUANGAN CATALOG
   =====================================================

   CATATAN:

   Untuk kategori yang belum memiliki gambar,
   variations sengaja dikosongkan.

   Anda tinggal mengisinya nanti.
   ===================================================== */

const designCategories = [

  /* ===================================================
     01 - KITCHEN SET
     =================================================== */

  {
    id: 'kitchen-set',

    name: 'Kitchen Set',

    desc:
      'Inspirasi desain kitchen set yang fungsional, modern, dan sesuai karakter ruang.',

    image: null,

    variations: [

    ]
  },


  /* ===================================================
     02 - LIVING ROOM
     =================================================== */

  {
    id: 'living-room',

    name: 'Living Room',

    desc:
      'Inspirasi desain living room dengan suasana nyaman, hangat, dan modern.',

    image: 'assets/katalog_design/living-room/LR-02.png',

    variations: [
  {
  name: 'LR-01',
  image:
    'assets/katalog_design/living-room/LR-01.png'
},
{
  name: 'LR-02',
  image:
    'assets/katalog_design/living-room/LR-02.png'
},
{
  name: 'LR-03',
  image:
    'assets/katalog_design/living-room/LR-03.png'
},
{
  name: 'LR-04',
  image:
    'assets/katalog_design/living-room/LR-04.png'
},
{
  name: 'LR-05',
  image:
    'assets/katalog_design/living-room/LR-05.png'
},
{
  name: 'LR-06',
  image:
    'assets/katalog_design/living-room/LR-06.png'
},
{
  name: 'LR-07',
  image:
    'assets/katalog_design/living-room/LR-07.png'
},
{
  name: 'LR-08',
  image:
    'assets/katalog_design/living-room/LR-08.png'
},
{
  name: 'LR-09',
  image:
    'assets/katalog_design/living-room/LR-09.jpg'
},
{
  name: 'LR-10',
  image:
    'assets/katalog_design/living-room/LR-10.png'
},
{
  name: 'LR-11',
  image:
    'assets/katalog_design/living-room/LR-11.png'
},
{
  name: 'LR-12',
  image:
    'assets/katalog_design/living-room/LR-12.png'
},
{
  name: 'LR-13',
  image:
    'assets/katalog_design/living-room/LR-13.png'
},
{
  name: 'LR-14',
  image:
    'assets/katalog_design/living-room/LR-14.png'
},
{
  name: 'LR-15',
  image:
    'assets/katalog_design/living-room/LR-15.png'
},
{
  name: 'LR-16',
  image:
    'assets/katalog_design/living-room/LR-16.png'
},
{
  name: 'LR-17',
  image:
    'assets/katalog_design/living-room/LR-17.png'
},
{
  name: 'LR-18',
  image:
    'assets/katalog_design/living-room/LR-18.png'
},
{
  name: 'LR-19',
  image:
    'assets/katalog_design/living-room/LR-19.png'
},
{
  name: 'LR-20',
  image:
    'assets/katalog_design/living-room/LR-20.png'
},
{
  name: 'LR-21',
  image:
    'assets/katalog_design/living-room/LR-21.png'
},
{
  name: 'LR-22',
  image:
    'assets/katalog_design/living-room/LR-22.png'
},
{
  name: 'LR-23',
  image:
    'assets/katalog_design/living-room/LR-23.png'
},
{
  name: 'LR-24',
  image:
    'assets/katalog_design/living-room/LR-24.png'
},
{
  name: 'LR-25',
  image:
    'assets/katalog_design/living-room/LR-25.png'
},
{
  name: 'LR-26',
  image:
    'assets/katalog_design/living-room/LR-26.png'
},
{
  name: 'LR-27',
  image:
    'assets/katalog_design/living-room/LR-27.png'
},
{
  name: 'LR-28',
  image:
    'assets/katalog_design/living-room/LR-28.png'
},
{
  name: 'LR-29',
  image:
    'assets/katalog_design/living-room/LR-29.png'
},
{
  name: 'LR-30',
  image:
    'assets/katalog_design/living-room/LR-30.png'
},
{
  name: 'LR-31',
  image:
    'assets/katalog_design/living-room/LR-31.png'
},
{
  name: 'LR-32',
  image:
    'assets/katalog_design/living-room/LR-32.png'
},
{
  name: 'LR-33',
  image:
    'assets/katalog_design/living-room/LR-33.png'
},
{
  name: 'LR-34',
  image:
    'assets/katalog_design/living-room/LR-34.png'
},
{
  name: 'LR-35',
  image:
    'assets/katalog_design/living-room/LR-35.png'
},
{
  name: 'LR-36',
  image:
    'assets/katalog_design/living-room/LR-36.png'
},
{
  name: 'LR-37',
  image:
    'assets/katalog_design/living-room/LR-37.png'
},
{
  name: 'LR-38',
  image:
    'assets/katalog_design/living-room/LR-38.png'
},
{
  name: 'LR-39',
  image:
    'assets/katalog_design/living-room/LR-39.png'
},
{
  name: 'LR-40',
  image:
    'assets/katalog_design/living-room/LR-40.png'
},
{
  name: 'LR-41',
  image:
    'assets/katalog_design/living-room/LR-41.png'
},
{
  name: 'LR-42',
  image:
    'assets/katalog_design/living-room/LR-42.png'
},
{
  name: 'LR-43',
  image:
    'assets/katalog_design/living-room/LR-43.jpg'
},
{
  name: 'LR-44',
  image:
    'assets/katalog_design/living-room/LR-44.jpg'
},
{
  name: 'LR-45',
  image:
    'assets/katalog_design/living-room/LR-45.png'
},
{
  name: 'LR-46',
  image:
    'assets/katalog_design/living-room/LR-46.png'
},
{
  name: 'LR-47',
  image:
    'assets/katalog_design/living-room/LR-47.png'
},
{
  name: 'LR-48',
  image:
    'assets/katalog_design/living-room/LR-48.png'
},
{
  name: 'LR-49',
  image:
    'assets/katalog_design/living-room/LR-49.png'
},
{
  name: 'LR-50',
  image:
    'assets/katalog_design/living-room/LR-50.png'
},
{
  name: 'LR-51',
  image:
    'assets/katalog_design/living-room/LR-51.png'
},
{
  name: 'LR-52',
  image:
    'assets/katalog_design/living-room/LR-52.png'
},
{
  name: 'LR-53',
  image:
    'assets/katalog_design/living-room/LR-53.png'
},
{
  name: 'LR-54',
  image:
    'assets/katalog_design/living-room/LR-54.png'
},
{
  name: 'LR-55',
  image:
    'assets/katalog_design/living-room/LR-55.png'
},
{
  name: 'LR-56',
  image:
    'assets/katalog_design/living-room/LR-56.png'
},
{
  name: 'LR-57',
  image:
    'assets/katalog_design/living-room/LR-57.png'
},
{
  name: 'LR-58',
  image:
    'assets/katalog_design/living-room/LR-58.png'
},
{
  name: 'LR-59',
  image:
    'assets/katalog_design/living-room/LR-59.png'
},
{
  name: 'LR-60',
  image:
    'assets/katalog_design/living-room/LR-60.png'
},
{
  name: 'LR-61',
  image:
    'assets/katalog_design/living-room/LR-61.png'
},
{
  name: 'LR-62',
  image:
    'assets/katalog_design/living-room/LR-62.png'
},
{
  name: 'LR-63',
  image:
    'assets/katalog_design/living-room/LR-63.png'
},
{
  name: 'LR-64',
  image:
    'assets/katalog_design/living-room/LR-64.png'
},
{
  name: 'LR-65',
  image:
    'assets/katalog_design/living-room/LR-65.png'
},
{
  name: 'LR-66',
  image:
    'assets/katalog_design/living-room/LR-66.png'
},
{
  name: 'LR-67',
  image:
    'assets/katalog_design/living-room/LR-67.png'
},
{
  name: 'LR-68',
  image:
    'assets/katalog_design/living-room/LR-68.png'
},
{
  name: 'LR-69',
  image:
    'assets/katalog_design/living-room/LR-69.png'
},
{
  name: 'LR-70',
  image:
    'assets/katalog_design/living-room/LR-70.png'
},
{
  name: 'LR-71',
  image:
    'assets/katalog_design/living-room/LR-71.png'
},
{
  name: 'LR-72',
  image:
    'assets/katalog_design/living-room/LR-72.png'
},
{
  name: 'LR-73',
  image:
    'assets/katalog_design/living-room/LR-73.png'
},
{
  name: 'LR-74',
  image:
    'assets/katalog_design/living-room/LR-74.png'
},
{
  name: 'LR-75',
  image:
    'assets/katalog_design/living-room/LR-75.png'
},
{
  name: 'LR-76',
  image:
    'assets/katalog_design/living-room/LR-76.png'
},
{
  name: 'LR-77',
  image:
    'assets/katalog_design/living-room/LR-77.png'
},
{
  name: 'LR-78',
  image:
    'assets/katalog_design/living-room/LR-78.png'
},
{
  name: 'LR-79',
  image:
    'assets/katalog_design/living-room/LR-79.png'
},
{
  name: 'LR-80',
  image:
    'assets/katalog_design/living-room/LR-80.png'
},
{
  name: 'LR-81',
  image:
    'assets/katalog_design/living-room/LR-81.png'
},
{
  name: 'LR-82',
  image:
    'assets/katalog_design/living-room/LR-82.png'
},
{
  name: 'LR-83',
  image:
    'assets/katalog_design/living-room/LR-83.png'
}

    ]
  },


  /* ===================================================
     03 - LOBI / WAITING ROOM
     =================================================== */

  {
    id: 'lobi-waiting-room',

    name: 'Lobi / Waiting Room',

    desc:
      'Inspirasi desain lobi dan waiting room yang nyaman dan representatif.',

    image: 'assets/katalog_design/lobi-waiting-room/LW-001.png',

    variations: [

      {
        name: 'LW-01',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-001.png'
      },
      {
        name: 'LW-02',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-002.png'
      },
      {
        name: 'LW-03',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-003.png'
      },
      {
        name: 'LW-04',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-004.png'
      },
      {
        name: 'LW-05',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-005.png'
      },
      {
        name: 'LW-06',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-006.png'
      },
      {
        name: 'LW-07',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-007.png'
      },
      {
        name: 'LW-08',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-008.png'
      },
      {
        name: 'LW-09',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-009.png'
      },
      {
        name: 'LW-10',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-010.png'
      },
      {
        name: 'LW-11',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-011.png'
      },
      {
        name: 'LW-12',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-012.png'
      },
      {
        name: 'LW-13',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-013.png'
      },
      {
        name: 'LW-14',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-014.png'
      },
      {
        name: 'LW-15',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-015.png'
      },
      {
        name: 'LW-16',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-016.png'
      },
      {
        name: 'LW-17',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-017.png'
      },
      {
        name: 'LW-18',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-018.png'
      },
      {
        name: 'LW-19',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-019.png'
      },
      {
        name: 'LW-20',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-020.png'
      },
      {
        name: 'LW-21',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-021.png'
      },
      {
        name: 'LW-22',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-022.png'
      },
      {
        name: 'LW-23',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-023.png'
      },
      {
        name: 'LW-24',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-024.png'
      },
      {
        name: 'LW-25',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-025.png'
      },
      {
        name: 'LW-26',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-026.png'
      },
      {
        name: 'LW-27',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-027.png'
      },
      {
        name: 'LW-28',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-028.png'
      },
      {
        name: 'LW-29',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-029.png'
      },
      {
        name: 'LW-30',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-030.png'
      },
      {
        name: 'LW-31',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-031.png'
      },
      {
        name: 'LW-32',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-032.png'
      },
      {
        name: 'LW-33',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-033.png'
      },
      {
        name: 'LW-34',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-034.png'
      },
      {
        name: 'LW-35',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-035.png'
      },
      {
        name: 'LW-36',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-036.png'
      },
      {
        name: 'LW-37',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-037.png'
      },
      {
        name: 'LW-38',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-038.png'
      },
      {
        name: 'LW-39',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-039.png'
      },
      {
        name: 'LW-40',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-040.png'
      },
      {
        name: 'LW-41',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-041.png'
      },
      {
        name: 'LW-42',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-042.png'
      },
      {
        name: 'LW-43',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-043.png'
      },
      {
        name: 'LW-44',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-044.png'
      },
      {
        name: 'LW-45',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-045.png'
      },
      {
        name: 'LW-46',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-046.png'
      },
      {
        name: 'LW-47',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-047.png'
      },
      {
        name: 'LW-48',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-048.png'
      },
      {
        name: 'LW-49',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-049.png'
      },
      {
        name: 'LW-50',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-050.png'
      },
      {
        name: 'LW-51',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-051.png'
      },
      {
        name: 'LW-52',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-052.png'
      },
      {
        name: 'LW-53',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-053.png'
      },
      {
        name: 'LW-54',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-054.png'
      },
      {
        name: 'LW-55',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-055.png'
      },
      {
        name: 'LW-56',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-056.png'
      },
      {
        name: 'LW-57',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-057.png'
      },
      {
        name: 'LW-58',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-058.png'
      },
      {
        name: 'LW-59',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-059.png'
      },
      {
        name: 'LW-60',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-060.png'
      },
      {
        name: 'LW-61',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-061.png'
      },
      {
        name: 'LW-62',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-062.png'
      },
      {
        name: 'LW-63',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-063.png'
      },
      {
        name: 'LW-64',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-064.png'
      },
      {
        name: 'LW-65',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-065.png'
      },
      {
        name: 'LW-66',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-066.png'
      },
      {
        name: 'LW-67',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-067.png'
      },
      {
        name: 'LW-68',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-068.png'
      },
      {
        name: 'LW-69',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-069.png'
      },
      {
        name: 'LW-70',
        image:
          'assets/katalog_design/lobi-waiting-room/LW-070.png'
      }
    ]
  },


  /* ===================================================
     04 - NOOK ON DEAD
     =================================================== */

  {
    id: 'nook-on-dead',

    name: 'Nook on Dead',

    desc:
      'Inspirasi pemanfaatan area ruang agar tetap fungsional dan memiliki karakter.',

    image: 'assets/katalog_design/nook-on-dead/NDA-01.png',

    variations: [

      {
        name: 'NDA-01',
        image:
          'assets/katalog_design/nook-on-dead/NDA-01.png'
      },
      {
        name: 'NDA-02',
        image:
          'assets/katalog_design/nook-on-dead/NDA-02.png'
      },
      {
        name: 'NDA-03',
        image:
          'assets/katalog_design/nook-on-dead/NDA-03.png'
      },
      {
        name: 'NDA-04',
        image:
          'assets/katalog_design/nook-on-dead/NDA-04.png'
      },
      {
        name: 'NDA-05',
        image:
          'assets/katalog_design/nook-on-dead/NDA-05.png'
      },
      {
        name: 'NDA-06',
        image:
          'assets/katalog_design/nook-on-dead/NDA-06.png'
      },
      {
        name: 'NDA-07',
        image:
          'assets/katalog_design/nook-on-dead/NDA-07.png'
      },
      {
        name: 'NDA-08',
        image:
          'assets/katalog_design/nook-on-dead/NDA-08.png'
      },
      {
        name: 'NDA-09',
        image:
          'assets/katalog_design/nook-on-dead/NDA-09.png'
      },
      {
        name: 'NDA-10',
        image:
          'assets/katalog_design/nook-on-dead/NDA-10.png'
      },
      {
        name: 'NDA-11',
        image:
          'assets/katalog_design/nook-on-dead/NDA-11.png'
      },
      {
        name: 'NDA-12',
        image:
          'assets/katalog_design/nook-on-dead/NDA-12.png'
      },
      {
        name: 'NDA-13',
        image:
          'assets/katalog_design/nook-on-dead/NDA-13.png'
      },
      {
        name: 'NDA-14',
        image:
          'assets/katalog_design/nook-on-dead/NDA-14.png'
      },
      {
        name: 'NDA-15',
        image:
          'assets/katalog_design/nook-on-dead/NDA-15.png'
      },
      {
        name: 'NDA-16',
        image:
          'assets/katalog_design/nook-on-dead/NDA-16.png'
      },
      {
        name: 'NDA-17',
        image:
          'assets/katalog_design/nook-on-dead/NDA-17.png'
      },
      {
        name: 'NDA-18',
        image:
          'assets/katalog_design/nook-on-dead/NDA-18.png'
      },
      {
        name: 'NDA-19',
        image:
          'assets/katalog_design/nook-on-dead/NDA-19.png'
      },
      {
        name: 'NDA-20',
        image:
          'assets/katalog_design/nook-on-dead/NDA-20.png'
      },
      {
        name: 'NDA-21',
        image:
          'assets/katalog_design/nook-on-dead/NDA-21.png'
      },
      {
        name: 'NDA-22',
        image:
          'assets/katalog_design/nook-on-dead/NDA-22.png'
      },
      {
        name: 'NDA-23',
        image:
          'assets/katalog_design/nook-on-dead/NDA-23.png'
      },
      {
        name: 'NDA-24',
        image:
          'assets/katalog_design/nook-on-dead/NDA-24.png'
      },

    ]
  },


  /* ===================================================
     05 - PLAFON PVC
     =================================================== */

  {
    id: 'plafon-pvc-design',

    name: 'Plafon PVC',

    desc:
      'Inspirasi penerapan plafon PVC pada berbagai konsep dan karakter ruang.',

    /*
      Untuk sementara menggunakan variasi pertama
      sebagai gambar kartu.

      Jadi Anda TIDAK perlu membuat cover khusus.
    */

    image:
      'assets/katalog_design/plafon-pvc/PLP-01.png',

    variations: [

      {
        name: 'PLP-01',
        image:
          'assets/katalog_design/plafon-pvc/PLP-01.png'
      },

      {
        name: 'PLP-02',
        image:
          'assets/katalog_design/plafon-pvc/PLP-02.png'
      },

      {
        name: 'PLP-03',
        image:
          'assets/katalog_design/plafon-pvc/PLP-03.png'
      },

      {
        name: 'PLP-04',
        image:
          'assets/katalog_design/plafon-pvc/PLP-04.png'
      },

      {
        name: 'PLP-05',
        image:
          'assets/katalog_design/plafon-pvc/PLP-05.png'
      },

      {
        name: 'PLP-06',
        image:
          'assets/katalog_design/plafon-pvc/PLP-06.png'
      },

      {
        name: 'PLP-07',
        image:
          'assets/katalog_design/plafon-pvc/PLP-07.png'
      },

      {
        name: 'PLP-08',
        image:
          'assets/katalog_design/plafon-pvc/PLP-08.png'
      },

      {
        name: 'PLP-09',
        image:
          'assets/katalog_design/plafon-pvc/PLP-09.png'
      },

      {
        name: 'PLP-10',
        image:
          'assets/katalog_design/plafon-pvc/PLP-10.png'
      },

      {
        name: 'PLP-11',
        image:
          'assets/katalog_design/plafon-pvc/PLP-11.png'
      },

      {
        name: 'PLP-12',
        image:
          'assets/katalog_design/plafon-pvc/PLP-12.png'
      },

      {
        name: 'PLP-13',
        image:
          'assets/katalog_design/plafon-pvc/PLP-13.png'
      },

      {
        name: 'PLP-14',
        image:
          'assets/katalog_design/plafon-pvc/PLP-14.png'
      },
      {
        name: 'PLP-14',
        image:
          'assets/katalog_design/plafon-pvc/PLP-15.png'
      },

      {
        name: 'PLP-16',
        image:
          'assets/katalog_design/plafon-pvc/PLP-16.png'
      },

      {
        name: 'PLP-17',
        image:
          'assets/katalog_design/plafon-pvc/PLP-17.png'
      },

      {
        name: 'PLP-18',
        image:
          'assets/katalog_design/plafon-pvc/PLP-18.png'
      },

      {
        name: 'PLP-19',
        image:
          'assets/katalog_design/plafon-pvc/PLP-19.png'
      },

      {
        name: 'PLP-20',
        image:
          'assets/katalog_design/plafon-pvc/PLP-20.png'
      },

      {
        name: 'PLP-21',
        image:
          'assets/katalog_design/plafon-pvc/PLP-21.png'
      },

      {
        name: 'PLP-22',
        image:
          'assets/katalog_design/plafon-pvc/PLP-22.png'
      },

      {
        name: 'PLP-23',
        image:
          'assets/katalog_design/plafon-pvc/PLP-23.png'
      },

      {
        name: 'PLP-24',
        image:
          'assets/katalog_design/plafon-pvc/PLP-24.png'
      },

      {
        name: 'PLP-25',
        image:
          'assets/katalog_design/plafon-pvc/PLP-25.png'
      },

      {
        name: 'PLP-26',
        image:
          'assets/katalog_design/plafon-pvc/PLP-26.png'
      },

      {
        name: 'PLP-27',
        image:
          'assets/katalog_design/plafon-pvc/PLP-27.png'
      },
      {
        name: 'PLP-28',
        image:
          'assets/katalog_design/plafon-pvc/PLP-28.png'
      },
      {
        name: 'PLP-29',
        image:
          'assets/katalog_design/plafon-pvc/PLP-29.png'
      },
      {
        name: 'PLP-30',
        image:
          'assets/katalog_design/plafon-pvc/PLP-30.png'
      },
      {
        name: 'PLP-31',
        image:
          'assets/katalog_design/plafon-pvc/PLP-31.png'
      },
      {
        name: 'PLP-32',
        image:
          'assets/katalog_design/plafon-pvc/PLP-32.png'
      },
      {
        name: 'PLP-33',
        image:
          'assets/katalog_design/plafon-pvc/PLP-33.png'
      },
      {
        name: 'PLP-34',
        image:
          'assets/katalog_design/plafon-pvc/PLP-34.png'
      },
      {
        name: 'PLP-35',
        image:
          'assets/katalog_design/plafon-pvc/PLP-35.png'
      },
      {
        name: 'PLP-36',
        image:
          'assets/katalog_design/plafon-pvc/PLP-36.png'
      },
      {
        name: 'PLP-37',
        image:
          'assets/katalog_design/plafon-pvc/PLP-37.png'
      },
      {
        name: 'PLP-38',
        image:
          'assets/katalog_design/plafon-pvc/PLP-38.png'
      },
      {
        name: 'PLP-39',
        image:
          'assets/katalog_design/plafon-pvc/PLP-39.png'
      },

      {
        name: 'PLP-40',
        image:
          'assets/katalog_design/plafon-pvc/PLP-40.png'
      },

    ]
  },


  /* ===================================================
     06 - SALON
     =================================================== */

  {
    id: 'salon',

    name: 'Salon',

    desc:
      'Inspirasi desain interior salon yang nyaman, modern, dan menarik.',

    image: null,

    variations: [

      /*
      Tambahkan variasi salon di sini.
      */

    ]
  },


  /* ===================================================
     07 - SMOKING ROOM
     =================================================== */

  {
    id: 'smoking',

    name: 'Smoking Room',

    desc:
      'Inspirasi desain smoking room dengan suasana yang nyaman dan memiliki karakter.',

    image: 'assets/katalog_design/smoking/SA-01.png',

    variations: [

      {
        name: 'SA-01',
        image:
          'assets/katalog_design/smoking/SA-01.png'
      },
      {
        name: 'SA-02',
        image:
          'assets/katalog_design/smoking/SA-02.png'
      },
      {
        name: 'SA-03',
        image:
          'assets/katalog_design/smoking/SA-03.png'
      },
      {
        name: 'SA-04',
        image:
          'assets/katalog_design/smoking/SA-04.png'
      },
      {
        name: 'SA-05',
        image:
          'assets/katalog_design/smoking/SA-05.png'
      },
      {
        name: 'SA-06',
        image:
          'assets/katalog_design/smoking/SA-06.png'
      },
      {
        name: 'SA-07',
        image:
          'assets/katalog_design/smoking/SA-07.png'
      },
      {
        name: 'SA-08',
        image:
          'assets/katalog_design/smoking/SA-08.png'
      },
      {
        name: 'SA-09',
        image:
          'assets/katalog_design/smoking/SA-09.png'
      },
      {
        name: 'SA-10',
        image:
          'assets/katalog_design/smoking/SA-010.png'
      },
      {
        name: 'SA-11',
        image:
          'assets/katalog_design/smoking/SA-011.png'
      },
      {
        name: 'SA-12',
        image:
          'assets/katalog_design/smoking/SA-012.png'
      },

    ]
  },


  /* ===================================================
     08 - TOILET TABLE
     =================================================== */

  {
    id: 'toilet-table',

    name: 'Toilet Table',

    desc:
      'Inspirasi desain toilet dan vanity area yang fungsional dan modern.',

    image: 'assets/katalog_design/toilet-table/TT-01.png',

    variations: [

      {
        name: 'TT-01',
        image:
          'assets/katalog_design/toilet-table/TT-01.png'
      },
      {
        name: 'TT-02',
        image:
          'assets/katalog_design/toilet-table/TT-02.png'
      },
      {
        name: 'TT-03',
        image:
          'assets/katalog_design/toilet-table/TT-03.png'
      },
      {
        name: 'TT-04',
        image:
          'assets/katalog_design/toilet-table/TT-04.png'
      },
      {
        name: 'TT-05',
        image:
          'assets/katalog_design/toilet-table/TT-05.png'
      },
      {
        name: 'TT-06',
        image:
          'assets/katalog_design/toilet-table/TT-06.png'
      },
      {
        name: 'TT-07',
        image:
          'assets/katalog_design/toilet-table/TT-07.png'
      },
      {
        name: 'TT-08',
        image:
          'assets/katalog_design/toilet-table/TT-08.png'
      },
      {
        name: 'TT-09',
        image:
          'assets/katalog_design/toilet-table/TT-09.png'
      },
      {
        name: 'TT-10',
        image:
          'assets/katalog_design/toilet-table/TT-10.png'
      },
      {
        name: 'TT-11',
        image:
          'assets/katalog_design/toilet-table/TT-11.png'
      },
      {
        name: 'TT-12',
        image:
          'assets/katalog_design/toilet-table/TT-12.png'
      },

    ]
  }

];



/* =====================================================
   STATE
   ===================================================== */

let activeType = 'material';



/* =====================================================
   ELEMENT WEBSITE
   ===================================================== */

const categoryGrid =
  document.getElementById('categoryGrid');

const detail =
  document.getElementById('catalog-detail');

const detailTitle =
  document.getElementById('detailTitle');

const detailDescription =
  document.getElementById('detailDescription');

const detailContent =
  document.getElementById('detailContent');

const detailEyebrow =
  document.getElementById('detailEyebrow');

const closeDetail =
  document.getElementById('closeDetail');

const categoryEyebrow =
  document.getElementById('categoryEyebrow');

const categoryHeadingTitle =
  document.getElementById('categoryHeadingTitle');

const categoryHeadingDescription =
  document.getElementById('categoryHeadingDescription');

const switchButtons =
  document.querySelectorAll('.catalog-switch-btn');



/* =====================================================
   GET ACTIVE CATEGORIES
   ===================================================== */

function getActiveCategories() {

  return activeType === 'material'
    ? materialCategories
    : designCategories;

}



/* =====================================================
   GET CATEGORY
   ===================================================== */

function getCategory(id) {

  const categories =
    getActiveCategories();

  return categories.find(
    category => category.id === id
  );

}



/* =====================================================
   UPDATE SECTION TITLE
   ===================================================== */

function updateCategoryHeading() {

  if (activeType === 'material') {

    categoryEyebrow.textContent =
      'MATERIAL CATALOG';

    categoryHeadingTitle.textContent =
      'Pilihan material';

    categoryHeadingDescription.textContent =
      'Pilih kategori material untuk melihat koleksi dan variasi yang tersedia.';

  }

  else {

    categoryEyebrow.textContent =
      'ROOM DESIGN CATALOG';

    categoryHeadingTitle.textContent =
      'Inspirasi ruang';

    categoryHeadingDescription.textContent =
      'Pilih jenis ruangan untuk melihat berbagai inspirasi desain yang tersedia.';

  }

}



/* =====================================================
   RENDER CATEGORY CARDS
   ===================================================== */

function renderCards() {

  const categories =
    getActiveCategories();


  categoryGrid.innerHTML =
    categories
      .map((item, index) => {

        /*
          Kalau image belum tersedia,
          gunakan gambar variasi pertama.

          Ini membuat kita tidak wajib
          membuat gambar cover.
        */

        const cardImage =
          item.image ||
          (
            item.variations &&
              item.variations.length > 0
              ? item.variations[0].image
              : null
          );


        const imageHTML =
          cardImage

            ? `
              <img
                class="catalog-card-image"
                src="${cardImage}"
                alt="${item.name}"
                loading="lazy"
              >
            `

            : `
              <div class="catalog-card-placeholder">

                <span>
                  OMD
                </span>

                <small>
                  Gambar belum ditambahkan
                </small>

              </div>
            `;


        return `

          <article
            class="catalog-card"
            data-id="${item.id}"
          >

            ${imageHTML}


            <div class="catalog-card-overlay">
            </div>


            <div class="catalog-number">

              ${String(index + 1).padStart(2, '0')}

            </div>


            <div class="catalog-card-info">

              <h3>
                ${item.name}
              </h3>

              <p>
                ${item.desc}
              </p>

            </div>


            <span class="catalog-arrow">
              ↗
            </span>

          </article>

        `;

      })
      .join('');


  /*
    Event klik
  */

  categoryGrid
    .querySelectorAll('.catalog-card')
    .forEach(card => {

      card.addEventListener(
        'click',
        () => {

          openCategory(
            card.dataset.id
          );

        }
      );

    });

}



/* =====================================================
   CHANGE CATALOG TYPE
   ===================================================== */

function changeCatalogType(type) {

  activeType = type;


  /*
    Update tombol
  */

  switchButtons.forEach(button => {

    button.classList.toggle(
      'active',
      button.dataset.catalogType === type
    );

  });


  /*
    Update heading
  */

  updateCategoryHeading();


  /*
    Render kartu
  */

  renderCards();


  /*
    Tutup detail sebelumnya
  */

  detail.classList.remove('open');


  /*
    Reset URL
  */

  history.replaceState(
    null,
    '',
    'katalog.html'
  );

}



/* =====================================================
   OPEN CATEGORY
   ===================================================== */

function openCategory(id) {

  const item =
    getCategory(id);


  if (!item) return;


  /*
    Card selected
  */

  categoryGrid
    .querySelectorAll('.catalog-card')
    .forEach(card => {

      card.classList.toggle(
        'selected',
        card.dataset.id === item.id
      );

    });


  /*
    Detail eyebrow
  */

  detailEyebrow.textContent =
    activeType === 'material'
      ? 'SELECTED MATERIAL'
      : 'SELECTED ROOM DESIGN';


  /*
    Title
  */

  detailTitle.textContent =
    item.name;


  /*
    Description
  */

  detailDescription.textContent =
    item.desc;



  /* ===================================================
     JIKA BELUM ADA VARIASI
     =================================================== */

  if (
    !item.variations ||
    item.variations.length === 0
  ) {

    detailContent.innerHTML = `

      <div class="detail-empty">

        <div>

          <strong>
            ${item.name}
          </strong>

          <span>
            Variasi untuk kategori ini
            belum ditambahkan.
          </span>

        </div>

      </div>

    `;

  }



  /* ===================================================
     JIKA ADA VARIASI
     =================================================== */

  else {

    detailContent.innerHTML =
      item.variations
        .map((variation, index) => {

          return `

            <div class="variation-card">

              <div class="variation-image">

                <img
                  src="${variation.image}"
                  alt="${variation.name}"
                  loading="lazy"
                >

              </div>


              <div class="variation-info">

                <span>
                  ${String(index + 1).padStart(2, '0')}
                </span>


                <h3>
                  ${variation.name}
                </h3>

              </div>

            </div>

          `;

        })
        .join('');

  }



  /*
    Tampilkan detail
  */

  detail.classList.add('open');


  /*
    Scroll ke detail
  */

  setTimeout(() => {

    detail.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  }, 30);


  /*
    URL

    Contoh:

    katalog.html?type=material&category=spc

    katalog.html?type=design&category=living-room
  */

  history.replaceState(
    null,
    '',
    `katalog.html?type=${activeType}&category=${item.id}`
  );

}



/* =====================================================
   CLOSE DETAIL
   ===================================================== */

closeDetail.addEventListener(
  'click',
  () => {

    detail.classList.remove(
      'open'
    );


    categoryGrid
      .querySelectorAll('.catalog-card')
      .forEach(card => {

        card.classList.remove(
          'selected'
        );

      });


    history.replaceState(
      null,
      '',
      'katalog.html'
    );

  }
);



/* =====================================================
   SWITCH BUTTON EVENT
   ===================================================== */

switchButtons.forEach(button => {

  button.addEventListener(
    'click',
    () => {

      changeCatalogType(
        button.dataset.catalogType
      );

    }
  );

});



/* =====================================================
   INITIAL RENDER
   ===================================================== */

updateCategoryHeading();

renderCards();



/* =====================================================
   OPEN FROM URL
   ===================================================== */

const params =
  new URLSearchParams(
    window.location.search
  );


const initialType =
  params.get('type');


const initialCategory =
  params.get('category');



/*
  Tentukan katalog berdasarkan URL
*/

if (
  initialType === 'design' ||
  initialType === 'material'
) {

  activeType =
    initialType;

  switchButtons.forEach(button => {

    button.classList.toggle(
      'active',
      button.dataset.catalogType === activeType
    );

  });

  updateCategoryHeading();

  renderCards();

}



/*
  Buka kategori jika ada
*/

if (initialCategory) {

  openCategory(
    initialCategory
  );

}