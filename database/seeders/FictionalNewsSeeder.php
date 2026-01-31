<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\News;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class FictionalNewsSeeder extends Seeder
{
    public function run()
    {
        // 1. Truncate News table
        // Use Schema to handle FK constraints agnostic of DB driver
        \Illuminate\Support\Facades\Schema::disableForeignKeyConstraints();
        News::truncate();
        Category::truncate();
        \Illuminate\Support\Facades\Schema::enableForeignKeyConstraints();

        $faker = \Faker\Factory::create('id_ID');

        // 2. Define Content
        $data = [
            'Pendidikan' => [
                [
                    'title' => 'Universitas Nusantara Luncurkan Program Studi Kecerdasan Buatan',
                    'content' => 'Universitas Nusantara (UN) secara resmi meluncurkan program studi baru Sarjana Kecerdasan Buatan (Artificial Intelligence) pada hari Senin (15/05). Rektor UN, Prof. Budi Santoso, menyatakan bahwa program ini dirancang untuk menjawab kebutuhan industri teknologi yang semakin pesat. "Kami ingin mencetak lulusan yang tidak hanya paham teori, tetapi juga mampu mengaplikasikan AI untuk solusi nyata di masyarakat," ujarnya. Kurikulum program ini akan mencakup pembelajaran mesin, pengolahan bahasa alami, dan etika AI.'
                ],
                [
                    'title' => 'Siswa SD Mentari Raih Emas di Olimpiade Matematika Internasional',
                    'content' => 'Prestasi membanggakan kembali ditorehkan oleh putra bangsa. Andi Wijaya, siswa kelas 5 SD Mentari Jakarta, berhasil meraih medali emas dalam International Mathematics Olympiad yang diselenggarakan di Tokyo, Jepang. Andi berhasil mengalahkan 200 peserta lain dari 50 negara. "Saya sangat senang dan tidak menyangka bisa menang. Terima kasih kepada guru dan orang tua yang selalu mendukung saya," kata Andi dengan wajah berseri-seri. Andi dikenal sebagai anak yang tekun dan gemar memecahkan teka-teki matematika sejak kecil.'
                ],
                [
                    'title' => 'Pemerintah Bagikan 1 Juta Laptop untuk Guru di Daerah Terpencil',
                    'content' => 'Kementerian Pendidikan dan Kebudayaan meluncurkan program digitalisasi sekolah dengan membagikan 1 juta unit laptop untuk guru-guru yang bertugas di daerah 3T (Tertinggal, Terdepan, dan Terluar). Menteri Pendidikan berharap bantuan ini dapat meningkatkan kualitas pembelajaran jarak jauh dan literasi digital di pelosok negeri. "Tidak boleh ada ketimpangan teknologi antara guru di kota dan di desa. Semua berhak mendapatkan akses yang sama," tegas Menteri dalam konferensi pers daring.'
                ],
            ],
            'Teknologi' => [
                [
                    'title' => 'Startup Lokal "AntarAja" Kembangkan Drone Pengantar Paket Otonom',
                    'content' => 'Startup logistik berbasis di Bandung, "AntarAja", mengumumkan keberhasilan uji coba drone pengantar paket otonom mereka. Drone yang diberi nama "SiGesit" ini mampu membawa beban hingga 5 kg dengan jarak tempuh 10 km. CEO AntarAja, Rina Melati, mengatakan teknologi ini akan merevolusi pengiriman barang di daerah macet. "Kami menargetkan penggunaan komersial penuh pada tahun depan setelah mendapatkan izin regulasi penerbangan," jelasnya.'
                ],
                [
                    'title' => 'Indonesia Siap Menggelar Jaringan 6G di Ibu Kota Baru',
                    'content' => 'Pemerintah Indonesia bekerja sama dengan raksasa teknologi global untuk mempersiapkan infrastruktur jaringan 6G di Ibu Kota Nusantara (IKN). Teknologi ini diklaim memiliki kecepatan 100 kali lipat dari 5G dan latensi yang sangat rendah. "IKN akan menjadi kota pintar pertama di dunia yang sepenuhnya terintegrasi dengan jaringan 6G," ujar Menteri Komunikasi dan Informatika. Uji coba awal direncanakan akan dilakukan pada kuartal pertama tahun 2027.'
                ],
                [
                    'title' => 'Mobil Listrik Buatan SMK Solo Laris Manis Dipesan Pejabat',
                    'content' => 'Mobil listrik rakitan siswa SMK Negeri 2 Solo, "Esemka EV", mendapatkan sambutan hangat dari pasar. Sebanyak 50 unit telah dipesan oleh pemerintah daerah untuk kendaraan dinas. Mobil ini memiliki desain futuristik dan mampu menempuh jarak 300 km sekali isi daya. Kepala Sekolah SMK N 2 Solo mengaku bangga dengan karya anak didiknya. "Ini bukti bahwa pendidikan vokasi kita mampu bersaing di era kendaraan listrik," ucapnya.'
                ],
            ],
            'Sosial' => [
                [
                    'title' => 'Ribuan Warga Ikuti Aksi Bersih Sungai Ciliwung',
                    'content' => 'Lebih dari 2.000 relawan dari berbagai komunitas lingkungan memadati bantaran Sungai Ciliwung pada hari Minggu (21/06) untuk melakukan aksi bersih-bersih massal. Kegiatan bertajuk "Ciliwung Berseri" ini berhasil mengangkut 5 ton sampah plastik dan limbah rumah tangga. Koordinator aksi, Siti Aminah, berharap kegiatan ini dapat menyadarkan masyarakat akan pentingnya menjaga kebersihan sungai. "Sungai adalah nadi kehidupan kita, mari kita jaga bersama," serunya.'
                ],
                [
                    'title' => 'Komunitas "BagiNasi" Salurkan Ribuan Paket Makanan untuk Tunawisma',
                    'content' => 'Di tengah himpitan ekonomi, solidaritas warga justru semakin kuat. Komunitas sosial "BagiNasi" rutin membagikan 1.000 paket nasi bungkus setiap Jumat malam kepada tunawisma dan pekerja informal di jalanan Jakarta. Gerakan yang bermula dari inisiatif sekelompok mahasiswa ini kini telah memiliki ratusan donatur tetap. "Kami percaya bahwa sebungkus nasi bisa memberikan harapan bagi mereka yang sedang berjuang," kata ketua komunitas, Fajar Nugraha.'
                ],
            ],
            'Budaya' => [
                [
                    'title' => 'Festival Tari Topeng Nusantara Pukau Wisatawan Asing',
                    'content' => 'Gelaran Festival Tari Topeng Nusantara yang diadakan di Cirebon sukses memukau ribuan pengunjung, termasuk wisatawan mancanegara. Berbagai jenis tari topeng dari seluruh penjuru Indonesia ditampilkan dengan megah. Salah satu turis asal Prancis, Pierre, mengaku sangat terkesan. "Ini adalah pertunjukan budaya paling magis yang pernah saya lihat. Detail topeng dan gerakannya sungguh luar biasa," ungkapnya. Festival ini diharapkan dapat melestarikan seni tari topeng yang mulai langka.'
                ],
                [
                    'title' => 'Batik Motif "Virus Corona" Jadi Simbol Kebangkitan UMKM',
                    'content' => 'Seorang perajin batik di Pekalongan menciptakan motif batik unik yang terinspirasi dari bentuk virus Corona, namun dengan sentuhan artistik yang indah. Motif ini dinamakan "Batik Pagebluk Sirna", yang bermakna doa agar pandemi segera berakhir. Tak disangka, batik ini viral di media sosial dan pesanan membludak hingga ke luar negeri. "Ini adalah cara kami merespons situasi sulit dengan kreativitas," ujar sang perajin, Slamet Riadi.'
                ],
            ],
            'Olahraga' => [
                [
                    'title' => 'Timnas Garuda Muda Lolos ke Semifinal Piala Asia U-23',
                    'content' => 'Sejarah baru tercipta! Timnas Indonesia U-23 memastikan tiket ke semifinal Piala Asia setelah menaklukkan Korea Selatan lewat drama adu penalti yang menegangkan. Kiper Ernando Ari menjadi pahlawan dengan menepis dua tendangan lawan. Pelatih Shin Tae-yong memuji mentalitas juang anak asuhnya. "Mereka bermain tanpa rasa takut. Ini adalah kemenangan untuk seluruh rakyat Indonesia," katanya. Ribuan suporter menggelar nonton bareng di berbagai kota untuk merayakan kemenangan ini.'
                ],
                [
                    'title' => 'Atlet Panjat Tebing Indonesia Pecahkan Rekor Dunia di Paris',
                    'content' => 'Veddriq Leonardo, atlet panjat tebing andalan Indonesia, kembali mengharumkan nama bangsa dengan memecahkan rekor dunia nomor speed putra pada kejuaraan di Paris. Ia mencatatkan waktu fantastis 4,90 detik, menumbangkan rekor sebelumnya. "Saya persembahkan rekor ini untuk Indonesia. Persiapan keras selama ini akhirnya terbayar," ucap Veddriq usai pertandingan. Ia kini menjadi kandidat kuat peraih emas di Olimpiade mendatang.'
                ],
            ],
        ];

        // 3. Insert Data
        foreach ($data as $catName => $articles) {
            // Ensure category exists
            $category = Category::firstOrCreate(
                ['name' => $catName],
                [
                    'slug' => Str::slug($catName), 
                    'description' => "Berita dan informasi terkini seputar dunia $catName."
                ]
            );

            foreach ($articles as $article) {
                News::create([
                    'title' => $article['title'],
                    'slug' => Str::slug($article['title']),
                    'content' => $article['content'],
                    'excerpt' => Str::limit($article['content'], 120),
                    'category_id' => $category->id,
                    'is_published' => true,
                    'published_at' => $faker->dateTimeBetween('-1 year', 'now'),
                    'author' => 'Redaksi LPPM',
                    'featured_image' => null, // Biarkan kosong atau set default jika ada
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
