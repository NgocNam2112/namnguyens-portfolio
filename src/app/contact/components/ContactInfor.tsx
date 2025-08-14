import { Linkedin, Mail, MapPin, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Contact } from '../hook/useContactService';

interface ContactInforProps {
  contact: Contact[] | undefined;
}

const ContactInfor = ({ contact }: ContactInforProps) => {
  return (
    <>
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

        <div className="space-y-6 justify-center">
          {contact?.[0]?.methods.map(method => (
            <div key={method.type} className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                {method.type === 'email' ? (
                  <Mail className="h-6 w-6 text-primary" />
                ) : method.type === 'linkedin' ? (
                  <Linkedin className="h-6 w-6 text-primary" />
                ) : (
                  <MapPin className="h-6 w-6 text-primary" />
                )}
              </div>

              <div>
                <h4 className="font-medium"> {method.label}</h4>
                {method.type === 'linkedin' ? (
                  <Link
                    href={method.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {method.value}
                  </Link>
                ) : (
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    {method.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8">
          <h4 className="font-medium mb-4"> Connect With Me</h4>
          <div className="flex space-x-4 justify-center">
            <Link
              href={contact?.[0]?.socials[0]?.url ?? ''}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </Link>
            <Link
              href={contact?.[0]?.socials[1]?.url ?? ''}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfor;
