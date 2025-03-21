import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Headphones, Info, Github, Twitter, Bot } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-emerald-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <div className="h-20 w-20 rounded-full bg-emerald-100 flex items-center justify-center">
              <BookOpen className="h-10 w-10 text-emerald-700" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-emerald-800">About Quran Player</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A beautiful digital platform for listening to the Holy Quran with all 114 surahs By Abdo Zakaria (Faze)
          </p>
        </div>

        {/* App Information */}
        <Card className="border-emerald-100">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              The Quran Player was created to make the Holy Quran accessible to everyone, everywhere. Our mission is to
              provide a beautiful, user-friendly platform for Muslims around the world to listen to the Quran with ease
              and reverence.
            </p>
            <p className="text-gray-600">
              We believe that technology should serve to enhance our connection with the Quran, making it easier to
              incorporate its recitation into our daily lives. Whether you're at home, commuting, or at work, the Quran
              Player allows you to listen to high-quality recitations of the Holy Quran.
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-800 mb-6 text-center">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-emerald-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-emerald-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-800 mb-2">Complete Quran</h3>
                  <p className="text-gray-600">
                    Access all 114 surahs of the Holy Quran with accurate Arabic text and English translations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <Headphones className="h-6 w-6 text-emerald-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-800 mb-2">Multiple Reciters</h3>
                  <p className="text-gray-600">
                    Choose from a selection of renowned Quran reciters including Sheikh Mishary Rashid Alafasy, Abdul
                    Basit Abdul Samad, and Mahmoud Khalil Al-Husary.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-100">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <Bot className="h-6 w-6 text-emerald-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-800 mb-2">AI Assistant</h3>
                  <p className="text-gray-600">
                    Get answers to your questions about Islam and the Quran with our integrated AI assistant that
                    provides knowledgeable responses.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* About the Quran */}
        <Card className="border-emerald-100">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">About the Holy Quran</h2>
            <p className="text-gray-600 mb-4">
              The Quran is the central religious text of Islam, believed by Muslims to be a revelation from Allah (God).
              It is widely regarded as the finest work in classical Arabic literature and is organized in 114 chapters
              (surahs) which consist of verses (ayahs).
            </p>
            <p className="text-gray-600 mb-4">
              Muslims believe that the Quran was verbally revealed by God to the Prophet Muhammad through the angel
              Gabriel gradually over a period of approximately 23 years, beginning on 22 December 609 CE, when Muhammad
              was 40, and concluding in 632, the year of his death.
            </p>
            <p className="text-gray-600">
              The Quran is thought by Muslims to be not simply divinely inspired, but the literal word of God. Muhammad
              did not write it as he did not know how to write. According to tradition, several of Muhammad's companions
              served as scribes, recording the revelations.
            </p>
          </CardContent>
        </Card>

        {/* About the Reciter */}
        <Card className="border-emerald-100">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">About the Reciters</h2>
            <p className="text-gray-600 mb-4">
              Our Quran Player features recitations from three world-renowned Qaris (Quran reciters):
            </p>

            <h3 className="text-lg font-semibold text-emerald-800 mt-4 mb-2">Sheikh Mishary Rashid Alafasy</h3>
            <p className="text-gray-600 mb-2">
              Born in Kuwait in 1976, Sheikh Mishary is known for his beautiful and melodious voice which has made him
              one of the most popular Quran reciters in the world. His recitation style is characterized by its clarity,
              melodious tone, and adherence to the rules of Tajweed.
            </p>

            <h3 className="text-lg font-semibold text-emerald-800 mt-4 mb-2">Abdul Basit Abdul Samad</h3>
            <p className="text-gray-600 mb-2">
              An Egyptian Qari who is widely regarded as one of the greatest reciters of the Quran. His powerful and
              emotional style of recitation has touched the hearts of millions around the world. He passed away in 1988,
              but his recitations continue to be widely listened to.
            </p>

            <h3 className="text-lg font-semibold text-emerald-800 mt-4 mb-2">Mahmoud Khalil Al-Husary</h3>
            <p className="text-gray-600 mb-2">
              A renowned Egyptian Quran reciter known for his precise application of tajweed rules. His recitation is
              often used for educational purposes due to its clarity and adherence to proper pronunciation.
            </p>
          </CardContent>
        </Card>

        {/* AI Assistant Section */}
        <Card className="border-emerald-100">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">Islam AI Assistant</h2>
            <p className="text-gray-600 mb-4">
              Our Quran Player includes an integrated AI assistant powered by Google's Generative AI that can answer
              your questions about Islam and the Quran. The assistant provides informative responses based on Islamic
              knowledge and can help with understanding Quranic concepts.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you're curious about a specific verse, seeking clarification on Islamic practices, or want to
              learn more about the teachings of Islam, our AI assistant is here to help. Simply click on the chat icon
              in the bottom right corner of the screen to start a conversation.
            </p>
            <p className="text-gray-600">
              The AI assistant is designed to be a helpful resource, but please note that it should not be considered a
              substitute for consulting with knowledgeable scholars for important religious matters.
            </p>
          </CardContent>
        </Card>

        {/* Contact and Social */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-emerald-800">Connect With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're constantly working to improve the Quran Player. If you have any suggestions, feedback, or questions,
            please don't hesitate to reach out to us.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/11FaZe11" // Replace with your GitHub link
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="rounded-full">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
            </a>
            <Button variant="outline" className="rounded-full">
              <Twitter className="h-5 w-5 mr-2" />
              Twitter
            </Button>
            <Button variant="outline" className="rounded-full">
              <Info className="h-5 w-5 mr-2" />
              Support
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-emerald-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">Start Listening Today</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Experience the beauty of the Quran with our easy-to-use player. Explore all 114 surahs with beautiful
            recitations.
          </p>
          <div className="flex justify-center">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/">Browse Surahs</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

